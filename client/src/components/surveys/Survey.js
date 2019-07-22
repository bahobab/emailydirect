import React from "react";

const Survey = ({ title, subject, body, dateSent, lastResponded, yes, no }) => {
  return (
    <div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title">{title}</span>
        <p>{subject}</p>
        <p> {body}</p>
        <p className="right">
          Sent On: {new Date(dateSent).toLocaleDateString()}
        </p>
        <p>Last Responded On: {new Date(lastResponded).toLocaleDateString()}</p>
      </div>
      <div className="card-action">
        <a>#of Yes: {yes}</a>
        <a># of No: {no}</a>
      </div>
    </div>
  );
};

export default Survey;
