import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Payments from "../payments/payments";

// import * as actions from '../../actions/index'

class Header extends React.Component {
  renderContents() {
    const loginStatus = this.props.auth;
    switch (loginStatus) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
          <li key={1}>
            <Payments />
          </li>,
          <li key={2} style={{ margin: "0 10px" }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key={3}>
            <a href="/api/logout">Logout</a>
          </li>,
        ];
    }
  }

  render() {
    return (
      <nav style={{ backgroundColor: "#202f4e" }}>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys/" : "/"}
            className="left brand-logo"
          >
            E maily
          </Link>
          <ul className="right">{this.renderContents()}</ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);
