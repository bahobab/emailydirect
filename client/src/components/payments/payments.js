import React from "react";
import StripeCheckout from "react-stripe-checkout";

class Payments extends React.Component {
  render() {
    return (
      <StripeCheckout
        name="Email"
        description="Pay for your purchase. Thank You"
        amount={500}
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      />
    );
  }
}

export default Payments;
