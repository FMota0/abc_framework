const User = require("../models/User");
const auth = require("../utils/auth");

const getToken = (req) => {
  if (req.headers.authorization?.split(" ")[0] === "Bearer") {
    return req.headers.authorization.split(" ")[1];
  } else if (req.query?.token) {
    return req.query.token;
  }
  return null;
}

const verifyToken = async (req, res, next) => {
  try {
    const token = getToken(req);
    const user = await auth(token);
    let dbUser = await User.findOne({ email: user.email });
    if (!dbUser) {
      dbUser = new User(user);
      await dbUser.save();
    }
    req.user = dbUser;
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).send("Não autorizado");
  }
}

module.exports = verifyToken;