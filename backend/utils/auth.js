import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const secret = process.env.ACCESS_TOKEN_KEY;
const expiration = "72h";

const auth = {
  signToken: function ({ username, email, _id, role }) {
    const payload = { username, email, _id, role };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
  resetPassword: function () {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, `${secret}`, { expiresIn: "15m" });
  },
  verifyToken: function (token) {
    try {
      const { data } = jwt.verify(token, secret, { maxAge: "25m" });
      return data;
    } catch (error) {
      console.log("This token has either expired or is invalid.");
    }
  },
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // separate "Bearer" from "tokenvalue"
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    // if no token, return request object as is
    if (!token) {
      return req;
    }

    try {
      // decode and attach user data to request object
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log("invalid token");
    }

    // return updated request object
    return req;
  },
};

export default auth;
