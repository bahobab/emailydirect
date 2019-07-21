import React from "react";

const SurveyFormReview = ({ onCancel }) => {
  return (
    <div>
      <h5>Please review and confirm before submitting...</h5>
      <button className="yellow darkn-3 btn-flat" onClick={onCancel}>
        Back
      </button>
    </div>
  );
};

export default SurveyFormReview;
