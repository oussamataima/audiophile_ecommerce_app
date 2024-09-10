import { CartItem } from "@/types";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51PMsnc2N2zqvontuf5cghZRndqPMToBNfz7NeFF19FVZbKzJDZZJpjbiE69pgtiPitAR4uQ3tvlZjR99nrhHegWP00Yb1Xt6ns"
);

export async function POST(request: Request) {
  try {
    const items = await request.json();
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: items.map((item: CartItem) => ({
        price_data: {
          currency: "usd",
          product_data: {
            // images: `${process.env.url}${item.image}` ,
            name: item.name,
        },
        unit_amount: item.price ,
    },
    quantity: item.quantity,
      })),

      mode: "payment",
      success_url: `${process.env.url}/?success=true`,
      cancel_url: `${process.env.url}/?canceled=true`,
      billing_address_collection: "required",
    });
    return NextResponse.json({ session_id: session.id, url: session.url });
  } catch (err: any) {
    return NextResponse.json({ statusCode: 500, message: err.message });
  }
}
