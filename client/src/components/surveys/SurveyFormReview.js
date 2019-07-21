import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import formFields from "./formFields";
import * as actions from "../../actions/index";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = formFields.map(({ label, name }) => (
    <div key={name}>
      <label>{label}</label>
      <div>{formValues[name]}</div>
    </div>
  ));
  return (
    <div>
      <h5>Please review and confirm before submitting...</h5>
      <div>{reviewFields}</div>
      <button
        className="yellow darken-3 btn-flat white-text"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)}
        className="green btn-flat right white-text"
      >
        Send Survey<i className="material-icons right">mail</i>
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    formValues: state.form.surveyForm.values
  };
};

export default connect(
  mapStateToProps,
  actions
)(withRouter(SurveyFormReview));
