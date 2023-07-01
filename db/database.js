import mongoose from "mongoose" ;


export const connectDB =()=>{
    mongoose.connect( process.env.MONGO_URI , {
        dbName : "finTrack",
    }).then(()=>console.log("mongoDB Database connected")).catch((e)=>console.log(e));
}