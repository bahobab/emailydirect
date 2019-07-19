const keys = require("../../config/keys");

module.exports = survey => {
  return `
    <html>
      <body>
        <div style="display: flex; flex-direction: column;">
          <h3>We'd Like To Hear From You</h3>
          <p>${survey}</p>
          <div style="width: 500px; display: flex; justify-content: flex-start;">
            <button style="margin-left: 10px; width: 65px;"><a href="${
              keys.REDIRECT_DOMAIN
            }/api/surveys/thanks">Yes</a></button>
            <button style="margin-left: 10px; width: 65px;"><a href="${
              keys.REDIRECT_DOMAIN
            }/api/surveys/thanks">No</a></button>
          </div>
        </div>
      </body>
    </html>
  `;
};
