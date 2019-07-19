const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const mongoose = require("mongoose");
const helmet = require("helmet");
const bodyParser = require("body-parser");

const keys = require("./config/keys");
mongoose.connect(keys.MONGO_URI);

require("./models/User");
require("./models/Surveys");
require("./services/passport"); // just the file is required

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.COOKIE_KEY]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/google.auth.route")(app);
require("./routes/billringRoutes")(app);
require("./routes/surveysRoute")(app);

if (process.env.NODE_ENV === "production") {
  // Express will server up production assets
  // like our main.js, main.css files
  app.use(express.static("client/build"));

  // Express will serve up the index.html file
  // if it does not recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Process terminated");
  });
});
// https://nodejs.dev/how-to-exit-from-a-nodejs-program
