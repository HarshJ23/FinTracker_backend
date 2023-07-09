import express from "express" ;
// import  {User}  from "./models/user.js";
// import bcrypt from "bcrypt" ;
import userRouter from "./routes/user.js";
import expenseRouter from "./routes/expense.js";
import incomeRouter from "./routes/income.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import {config } from "dotenv" ;
import { errorMiddleware } from "./middlewares/error.js";

export const app = express(); 

config({
    path : "./db/config.env" ,
})


// middleware
app.use(express.json());

app.use(cookieParser());

app.use(cors({

    origin : [process.env.FRONTEND_URL],
    methods : ["GET" , "PUT" ,"POST" , "DELETE"],
    credentials : true,
}));


app.use("/api/v1/users",userRouter);

app.use("/api/v1/expense",expenseRouter);

app.use("/api/v1/income",incomeRouter);


app.get("/" , (req ,res)=>{
    res.send("Server is working nice")
});

app.use(errorMiddleware);

// register user API


// user login API
// app.post("/login" , async (req, res)=>{
//     const {email , password} = req.body ;

//     let user = await User.findOne({email}).select("+password");
    
//     if(!user){
//         return res.json({
//             success : "false" ,
//             message : "Account DNE , Register first",
//         });
//     };
//     const isMatch = await bcrypt.compare(password , user.password);
//     if(!isMatch){
//         return res.json({
//             success : "false", 
//             message : "Invalid credentials",

//         });
//     };
//     res.json({
//         success : true , 
//         message : "login successful",
//     });
// });


// 