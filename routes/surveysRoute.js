const mongoose = require("mongoose");
const Path = require("path-parser");
const _ = require("lodash");
const { URL } = require("url");

const requireLogin = require("../middlewares/requireLoggin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const Survey = mongoose.model("survey");
const surveyTemplate = require("../services/email-templates/surveyTemplate");

module.exports = app => {
  app.get("/api/surveys/thanks", (req, res) => {
    res.send("Thanks for voting");
  });

  app.post("/api/surveys/webhooks", (req, res) => {
    const p = new Path("/api/surveys/:surveyId/:choice");

    const events = _.chain(req.body)
      .map(({ email, url }) => {
        const match = p.test(new URL(url).pathname);

        if (match) {
          return { email, ...match };
        }
      })
      .compact()
      .uniqBy("email", "surveyId")
      .value();

    console.log(events);
    res.send({});
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
    const mailer = new Mailer(survey, surveyTemplate(survey));

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
