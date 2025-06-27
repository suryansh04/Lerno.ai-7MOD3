// backend/payment.js
import Stripe from 'stripe';

const STRIPE_SECRET_KEY = "sk_test_51RQhMx070ajDSpWDa86fquq0abTdgMM3OnQkrBF4M2kyDZsyLVKFeHmdS3QEHg8zopU7vpvSQZtrTv43X2LKzvtP00HqGHV3wj";
const stripe = new Stripe(STRIPE_SECRET_KEY);

export const createCheckoutSession = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { priceId } = req.body;

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: ${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID},
      cancel_url: ${req.headers.origin}/pricing,
    });

    res.status(200).json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};