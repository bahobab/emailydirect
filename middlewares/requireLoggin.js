module.exports.exports = (req, res, next) => {
  if (!req.user) {
    return res
      .status(401)
      .send({ error: "You Must Be Logged In To Perfor Tis Operation" });
  }

  next();
};
