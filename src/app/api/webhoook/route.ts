// import { NextRequest, NextResponse } from 'next/server';
// import Stripe from 'stripe';
// // import getRawBody from 'raw-body';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
//     apiVersion: '2024-04-10'
// })

// const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

// export const POST = async (req: NextRequest) => {
//     try {
//       console.log('req.headers', req.headers);
  
//       const sig: any = req.headers.get('stripe-signature');
//     const resp = await req.text();
//     const rawBody = JSON.parse(resp);
  
//       let event;
  
//       try {
//         event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
//       } catch (err: any) {
//         return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
//       }
  
//       console.log('event.type', JSON.stringify(event.type));
  
//       if (event.type === 'checkout.session.completed') {
//         const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
//           (event.data.object as any).id,
//           {
//             expand: ['line_items'],
//           }
//         );
  
//         const lineItems = sessionWithLineItems.line_items;
  
//         if (!lineItems) return new NextResponse('Internal Server Error', { status: 500 });
  
//         try {
//           // Save the data, change customer account info, etc
//           console.log('Fullfill the order with custom logic');
//           console.log('data', lineItems.data);
//           console.log(
//             'customer email',
//             (event.data.object as any).customer_details.email
//           );
//           console.log('created', (event.data.object as any).created);
//         } catch (error) {
//           console.log('Handling when youre unable to save an order');
//         }
//       }
  
//       return new NextResponse('OK', { status: 200 });
//     } catch (error) {
//       console.error(error);
//       return new NextResponse('Internal Server Error', { status: 500 });
//     }
//   };


import Stripe from "stripe"
import { headers } from "next/headers"
import { NextResponse } from "next/server"

import { stripe } from "../../../../lib/stripe"
// import prisma from "@/lib/db"
export async function POST(req: Request) {
  const body = await req.text()
  const signature = headers().get("Stripe-Signature") as string

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (error: any) {
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 })
  }

  const session = event.data.object as Stripe.Checkout.Session;
  const address = session?.customer_details?.address;

  const addressComponents = [
    address?.line1,
    address?.line2,
    address?.city,
    address?.state,
    address?.postal_code,
    address?.country
  ];

  const addressString = addressComponents.filter((c) => c !== null).join(', ');

  console.log("the stripe session is " , session);
  console.log("the address is  " , address);

  if(event.type === "checkout.session.completed"){
    console.log("the session is successful");
    
  }
  


  // if (event.type === "checkout.session.completed") {
  //   const order = await prisma.order.update({
  //     where: {
  //       id: session?.metadata?.orderId,
  //     },
  //     data: {
  //       isPaid: true,
  //       address: addressString,
  //       phone: session?.customer_details?.phone || '',
  //     },
  //     include: {
  //       orderItems: true,
  //     }
  //   });

  //   const productIds = order.orderItems.map((orderItem) => orderItem.productId);

  //   await prisma.product.updateMany({
  //     where: {
  //       id: {
  //         in: [...productIds],
  //       },
  //     },
  //     data: {
  //       isArchived: true
  //     }
  //   });
  // }

  return new NextResponse(null, { status: 200 });
};

  

// export async function POST(req: NextRequest){

//     const payload = await req.text()
//     const res  = JSON.parse(payload); 

//     const sig = req.headers.get('Stripe-Signature')

//     const dateTime = new Date(res?.created *1000 ).toLocaleDateString();
//     const timeString= new Date(res?.created *1000 ).toLocaleTimeString();

//     try{
//         let event = stripe.webhooks.constructEvent(
//             payload, 
//             sig!,
//             process.env.STRIPE_WEBHOOK_SECRET!,
    
//         )
//         console.log("event " ,event.type);

//         // charge.succeeded 
//         // payment_intent.succeeded
//         // payment_intent.created

//         console.log(
//             res?.data?.object?.billing_details?.email, // email
//             res?.data?.object?.amount, // amount
//             JSON.stringify(res), // payment info
//             res?.type, // type
//             String(timeString), // time
//             String(dateTime), // date
//             res?.data?.object?.receipt_email, // email
//             res?.data?.object?.receipt_url, // url
//             JSON.stringify(res?.data?.object?.payment_method_details), // Payment method details
//             JSON.stringify(res?.data?.object?.billing_details), // Billing details
//             res?.data?.object?.currency // Currency
//         );
        
//         return NextResponse.json({status: "success" , event: event.type, response: res})
//         }
//         catch(error){
//             return NextResponse.json({status : "failed" , error})
//         }
     
// }