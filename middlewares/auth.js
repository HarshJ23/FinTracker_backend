// 

import { User } from "../models/user.js";
import jwt from "jsonwebtoken";

export const isAuth = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({ error: { message: "Authentication required" } });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    req.user = await User.findById(decoded._id);
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ error: { message: "Expired token" } });
    }
    return res.status(401).json({ error: { message: "Invalid token" } });
  }
};
