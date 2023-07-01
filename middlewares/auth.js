import { User } from "../models/user.js";
import jwt from "jsonwebtoken";



export const isAuth = async (req, res ,next)=>{
    const {token} = req.cookies;
    if(!token){
   return res.status(404).json({
    success : false, 
    message : "Please login first",
  });
}
  const decoded = jwt.verify(token , "fintrackerv1");
    req.user = await User.findById(decoded._id);
  next();
};
