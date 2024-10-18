const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export function getStripeServerClient() {
  return stripe;
}
