const mongoose = require("mongoose");

const requireLogin = require("../middlewares/requireLoggin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const Survey = mongoose.model("survey");
const surveyTemplate = require("../services/email-templates/surveyTemplate");

module.exports = app => {
  app.get("/api/surveys/thanks", (req, res) => {
    res.send("Thanks for voting");
  });

  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;
    const surveyRecipients = recipients
      .split(",")
      .map(email => ({ email: email.trim() }));

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: surveyRecipients,
      _user: req.user.id,
      dateSent: Date.now()
    });

    // send survey using Mailer
    const mailer = new Mailer(
      survey,
      surveyTemplate(`<div>${survey.body}</div>`)
    );

    try {
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();

      res.send(user);
    } catch (error) {
      res.stattus(422).send(error);
    }
  });
};
