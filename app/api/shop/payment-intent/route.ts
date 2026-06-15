import { NextResponse } from 'next/server';
import { stripeClient } from '@/lib/shop/stripe';
export async function POST(request: Request) {
  const { amount, currency = 'eur' } = await request.json();
  const intent = await stripeClient().paymentIntents.create({ amount, currency, automatic_payment_methods: { enabled: true } });
  return NextResponse.json({ clientSecret: intent.client_secret });
}
