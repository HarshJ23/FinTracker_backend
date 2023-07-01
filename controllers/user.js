import {User} from "../models/user.js";
import bcrypt from "bcrypt"; 
import jwt from "jsonwebtoken";
// import cookieParser from "cookie-parser";
import { sendCookie } from "../utils.js/cookie.js";



//  export const isAuth = async (req, res ,next)=>{
//     const {token} = req.cookies;
//     if(!token){
//    return res.status(404).json({
//     success : false, 
//     message : "Please login first",
//   });

//   const decoded = jwt.verify(token , process.env.JWT_TOKEN);
//     req.user = await User.findById(decoded._id);
//   next();


//     };
// };





// register new user
export const register = async (req, res)=>{
    const {name , email , password} = req.body ;
    let user = await User.findOne({email});
    if (user){
       return res.json({
            success : false,
            message : "Account exsists already please login", 
        })
    }
        const hashedPassword =  await bcrypt.hash(password , 10);
        user =  await User.create({name , email , password:hashedPassword});
        
        sendCookie(user , res , "Registered"  , 201);
};

// login
export const login = async (req, res) =>{
        const {email , password} = req.body ;
    let user = await User.findOne({email}).select("+password");
    if(!user){
        return res.json({
            success : "false" ,
            message : "Account DNE , Register first",
        });
    };
    const isMatch = await bcrypt.compare(password , user.password);
    if(!isMatch){
        return res.json({
            success : "false", 
            message : "Invalid credentials",

        });
    };
            // user   res              message         status code we want after success
    sendCookie(user , res , `welcome back ${user.name}!`  , 201);

};

// logout
export const logout = (req, res) =>{
    res.status(200).cookie("token" , null , {
        expires: new Date(Date.now()),
    }).json({
        success : true , 
        message : "Logged out", 
    })
};


// fetch profile details
export const profile = async (req, res)=>{
    res.status(200).json({
        success : true , 
        user : req.user , 
    });
};