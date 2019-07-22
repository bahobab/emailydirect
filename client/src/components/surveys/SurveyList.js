import React from "react";
import { connect } from "react-redux";

import { fetchSurveys } from "../../actions";
import Survey from "./Survey";

class SurveyList extends React.Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  render() {
    if (this.props.surveys.length === 0) {
      return (
        <div>
          <h2>You have no surveys to show</h2>
        </div>
      );
    }
    const surveyList = this.props.surveys
      .reverse()
      .map(survey => <Survey key={survey._id} {...survey} />);
    return <div>{surveyList}</div>;
  }
}

// const mapDispatchToProps = dispatch => ({
//   fetchSurveys: () => dispatch(fetchSurveys())
// });

const mapStateToProps = ({ surveys: { surveys } }) => {
  return {
    surveys
  };
};

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
