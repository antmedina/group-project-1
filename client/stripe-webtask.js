// wt create stripe-webtask.js --name stripe --secret STRIPE_PRIVATE_KEY=....

module.exports = function(ctx, callback) {
    var stripe = require('stripe')(ctx.data.STRIPE_PRIVATE_KEY);
    var stripeToken = ctx.data.stripeToken;
       
    stripe.customers.create({
        source: stripeToken,
        description: 'subscription for foo ' + ctx.data.stripeEmail,
        email: ctx.data.stripeEmail,
        plan: "your-plan"
    }, callback);
  }
  