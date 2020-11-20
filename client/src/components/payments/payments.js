import React from "react";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";

import * as actions from "../../actions";

class Payments extends React.Component {
  render() {
    return (
      <StripeCheckout
        name="Email"
        description="Pay for your purchase. Thank You"
        amount={500}
        token={(token) => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Buy Credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
