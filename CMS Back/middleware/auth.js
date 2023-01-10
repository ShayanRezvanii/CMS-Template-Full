const jwt = require("jsonwebtoken");

// const config = process.env;

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["Authorization"];
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, "CMS_KEY");
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("invalid Token");
  }
  return next();
};

module.exports = verifyToken;
