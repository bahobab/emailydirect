module.exports = app => {
  app.post("/api/stripe", (req, res) => {
    console.log(req);
  });
};
