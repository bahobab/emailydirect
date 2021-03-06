/* ****************** original code from course *************/
// const sendgrid = require("sendgrid");
// const helper = sendgrid.mail;
// const keys = require("../config/keys");

// class Mailer extends helper.Mail {
//   constructor({ subject, recipients }, mailContent) {
//     super();
//     this.sgApi = sendgrid(keys.SENDGRID_KEY);
//     this.from_email = new helper.Email("No_Reply@emailydirect.com");
//     this.subject = subject;
//     this.body = new helper.Content("tex/html", mailContent);
//     this.recipients = this.formatAddresses(recipients);

//     this.addContent(this.body); // inherited
//     this.addClickTracking();
//     this.addRecipients();
//   }

//   formatAddresses(recipients) {
//     return recipients.map(({ email }) => new helper.Email(email));
//   }

//   addClickTracking() {
//     // from Sendgrid docs
//     const trackingSettings = new helper.TrackingSettings();
//     const clickTracking = new helper.ClickTracking(true, true);

//     trackingSettings.setClickTracking(clickTracking);
//     this.addTrackingSettings(trackingSettings);
//   }

//   addRecipients() {
//     const personalize = new helper.Personalization();
//     this.recipients.forEach(recipient => {
//       personalize.addTo(recipient);
//     });
//     this.addPersonalization(personalize);
//   }

//   async send() {
//     try {
//       const request = this.sgApi.emptyRequest({
//         method: "POST",
//         path: "/v3/mail/send",
//         body: this.toJSON()
//       });

//       const response = await this.sgApi.API(request);
//       return response;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }

// module.exports = Mailer;

/* *****************************************************/

const sgMail = require("@sendgrid/mail"); // separate Node package
const helpers = require("@sendgrid/helpers"); // separate Node package
const keys = require("../config/keys"); // some place where you store your API keys

class Mailer extends helpers.classes.Mail {
  // Through the use of Static methods from the Mail helper Class, you create a sendgrid compliant instance that can be send easily
  constructor({ subject, recipients }, content) {
    super();
    this.setFrom("khoophx@gmail.com"); // uses the EmailAddress.create method
    this.setSubject(subject);
    this.addHtmlContent(content); // same as addContent, but more specific for HTML

    this.recipients = recipients.map(({ email }) =>
      helpers.classes.EmailAddress.create(email)
    );

    this.setTrackingSettings({
      clickTracking: { enable: true, enableText: true },
    });
    this.addTo(this.recipients); // This uses the personalization method in the background
  }

  // To separate our data from what we send out, we create another function
  async send() {
    sgMail.setApiKey(keys.SENDGRID_KEY);
    return await sgMail.send(this.toJSON()); // attach the current instance to be send out with SendGrid
  }
}

module.exports = Mailer;
