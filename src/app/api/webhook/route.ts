import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
	// https://github.com/stripe/stripe-node#configuration
	apiVersion: "2024-04-10",
});

const webhookSecret: string = process.env.STRIPE_WEBHOOK_SECRET!;

const webhookHandler = async (req: NextRequest) => {
	try {
		const buf = await req.text();
		const sig = headers().get("Stripe-Signature") as string

		let event: Stripe.Event;

		try {
			event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
		} catch (err) {
			const errorMessage =
				err instanceof Error ? err.message : "Unknown error";
			// On error, log and return the error message.
			if (err! instanceof Error) console.log(err);
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

		// getting to the data we want from the event
		const subscription = event.data.object as Stripe.Subscription;
		const subscriptionId = subscription.id;

    let news; 


    if (event.type === 'customer.subscription.created') {
      const subscription = event.data.object as Stripe.Subscription;
    
      // Get the customer ID from the subscription
      const customerId = subscription.customer as string;
    
      // Retrieve the customer object from Stripe
      const customer = await stripe.customers.retrieve(customerId);
    
      // Extract the billing details from the customer object
      const billingDetails = customer;

      news = billingDetails; 
    
      // Do something with the billing details
      console.log('Billing details:', billingDetails);
    }



		// switch (event.type) {
		// 	case "customer.subscription.created":
		// 		await prisma.user.update({
		// 			where: {
		// 				stripeCustomerId: subscription.customer as string,
		// 			},
		// 			data: {
		// 				isActive: true,
		// 				subscriptionID: subscriptionId,
		// 			},
		// 		});
		// 		break;
		// 	case "customer.subscription.deleted":
		// 		await prisma.user.update({
		// 			where: {
		// 				stripeCustomerId: subscription.customer as string,
		// 			},
		// 			data: {
		// 				isActive: false,
		// 			},
		// 		});
		// 		break;

		// 	default:
		// 		console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`);
		// 		break;
		// }

		// Return a response to acknowledge receipt of the event.
		return NextResponse.json({news,  received: true });
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
