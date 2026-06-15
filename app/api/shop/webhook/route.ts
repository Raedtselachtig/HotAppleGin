import { NextResponse } from 'next/server';
import { stripeClient } from '@/lib/shop/stripe';
export async function POST(request: Request) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature');
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!signature || !secret) return NextResponse.json({ received: false }, { status: 400 });
  const event = stripeClient().webhooks.constructEvent(body, signature, secret);
  if (event.type === 'payment_intent.succeeded') {
    // ChannelDock order handoff lives here when production credentials are present.
  }
  return NextResponse.json({ received: true });
}
