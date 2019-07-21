import React from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";

import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmail";
import formFields from "./formFields";

class SurveyForm extends React.Component {
  renderFields(props) {
    // console.log(props);
    return (
      <div>
        {formFields.map(({ name, label }) => (
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

  errors.recipients = validateEmails(values.recipients || "");

  formFields.forEach(({ name }) => {
    if (!values[name]) errors[name] = `You must provide value for ${name}`;
  });

  return errors;
};

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm); // form: 'surveyForm' appears on redux
