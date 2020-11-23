import React from "react";

const Landing = (props) => (
  <div
    style={{
      textAlign: "center",
      height: "80vh",
      backgroundColor: "yellow",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      color: "#202f4e",
    }}
  >
    <h1>Emaily!!</h1>
    <h4>Manage Feedback From Your Clients with emails</h4>
    <a href="/auth/google" style={{ marginTop: "20px" }}>
      <button
        style={{
          width: "150px",
          height: "40px",
          cursor: "pointer",
          border: "none",
        }}
      >
        <span style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
          Start Now
        </span>
      </button>
    </a>
  </div>
);

export default Landing;
