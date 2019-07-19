const mongoose = require("mongoose");
const { Schema } = mongoose;

const RecipientSchema = require("./Recipient");

const SurveySchema = new Schema({
  name: String,
  title: String,
  subject: String,
  body: String,
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  recipients: [RecipientSchema],
  dateSent: Date,
  lastResponded: Date,
  _user: { type: Schema.Types.ObjectId, ref: "User" } // User collection id
});

mongoose.model("survey", SurveySchema);
