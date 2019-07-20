import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import Dashboard from "./components/dashboard/Dashboard";
import Header from "./components/header/Header";
import Landing from "./components/landing/Landing";
import SurveyNew from "./components/surveys/SurveyNew";

import { fetchUser } from "./actions";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currenUser: null
    };
  }

  componentDidMount() {
    const { fetchUser } = this.props;
    fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <div>
              <Route exact path="/" component={Landing} />
              <Route exact path="/surveys" component={Dashboard} />
              <Route path="/surveys/new" component={SurveyNew} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser())
});

export default connect(
  null,
  mapDispatchToProps
)(App);
