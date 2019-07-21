import React from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";

import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmail";

const FIELDS = [
  { label: "Survey Title", name: "title" },
  { label: "Subject Line", name: "subject" },
  { label: "Survey Body", name: "body" },
  { label: "Recipient List", name: "emails" }
];

class SurveyForm extends React.Component {
  renderFields(props) {
    // console.log(props);
    return (
      <div>
        {FIELDS.map(({ name, label }) => (
          <Field
            key={name}
            type="text"
            label={label}
            name={name}
            component={SurveyField}
          />
        ))}
      </div>
    );
  }
  render() {
    const { handleSubmit, onSurveySubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text left">
            Cancel
            <i className="material-icons" />
          </Link>
          <button type="submit" className="teal btn-flat white-text right">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};

  errors.emails = validateEmails(values.emails || "");

  FIELDS.forEach(({ name }) => {
    if (!values[name]) errors[name] = `You must provide value for ${name}`;
  });

  return errors;
};

export default reduxForm({ validate, form: "surveyForm" })(SurveyForm);
