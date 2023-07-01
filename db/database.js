import mongoose from "mongoose" ;


export const connectDB =()=>{
    mongoose.connect("mongodb://127.0.0.1:27017" , {
        dbName : "finTrack",
    }).then(()=>console.log("mongoDB Database connected")).catch((e)=>console.log(e));
}