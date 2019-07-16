const keys = require("../config/keys");
const stripe = require("stripe")(keys.STRIPE_SECRET_KEY);

const requireLogin = require("../middlewares/requireLoggin");

module.exports = app => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "USD",
      description: "$5 for 5 credits",
      source: req.body.id
    });
    const { user } = req;
    user.credits += 5;
    const currentUser = await user.save();

    res.send(currentUser);
  });
};
