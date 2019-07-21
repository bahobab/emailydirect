const keys = require("../../config/keys");

module.exports = survey => {
  return `
    <html>
      <body>
        <div style="display: flex; flex-direction: column;">
          <h3>${survey.title}</h3>
          <p>${survey.body}</p>
          <div style="width: 500px; display: flex; justify-content: flex-start;">
            <button style="margin-left: 10px; width: 65px;"><a href="${
              keys.REDIRECT_DOMAIN
            }/api/surveys/${survey.id}/yes">Yes</a></button>
            <button style="margin-left: 10px; width: 65px;"><a href="${
              keys.REDIRECT_DOMAIN
            }/api/surveys/${survey.id}/no">No</a></button>
          </div>
        </div>
      </body>
    </html>
  `;
};
