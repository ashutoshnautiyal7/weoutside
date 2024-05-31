import Stripe from "stripe";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: "2024-04-10",
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

const webhookHandler = async (req) => {
  try {
    const buf = await req.text();
    const sig = headers().get("Stripe-Signature");

    let event;

    try {
      event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      // On error, log and return the error message.
      if (!(err instanceof Error)) console.log(err);
      console.log(`❌ Error message: ${errorMessage}`);

      return NextResponse.json(
        {
          error: {
            message: `Webhook Error: ${errorMessage}`,
          },
        },
        { status: 400 }
      );
    }

    // Successfully constructed event.
    console.log("✅ Success:", event.id);

    let updateProfileResponse;

    switch (event.type) {
      case "customer.subscription.created":
        const subscription = event.data.object;
        const subscriptionId = subscription.id;
        const customerId = subscription.customer;

        // Retrieve the customer object from Stripe
        const customer = await stripe.customers.retrieve(customerId);

        let customerEmail;

        // Type guard to check if customer is of type Customer
        if ("email" in customer && customer.email) {
          customerEmail = customer.email;
        } else {
          console.error("Customer not found or has been deleted");
        }

        // Make a request to the Express server's /api/update-profile endpoint
        updateProfileResponse = await fetch(
          "https://we-out-backend.vercel.app/api/gen-update",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: customerEmail,
              stripeCustomerId: customerId,
              isActive: true,
              subscriptionID: subscription.id,
            }),
          }
        );

        if (updateProfileResponse.ok) {
          console.log("User data updated successfully");
        } else {
          console.error("Failed to update user data");
        }

        break;
      case "customer.subscription.deleted":
        break;

      default:
        console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`);
        break;
    }

    return NextResponse.json({ updateProfileResponse, received: true });
  } catch {
    return NextResponse.json(
      {
        error: {
          message: `Method Not Allowed`,
        },
      },
      { status: 405 }
    ).headers.set("Allow", "POST");
  }
};

export { webhookHandler as POST };