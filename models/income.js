import mongoose from "mongoose" ;

const schema = new mongoose.Schema({
    category : {
        type : String , 
        required : true , 
    }, 

    subcategory : {
        type:String , 
        required:true
    } ,

    amount : {
        type : Number , 
        required : true , 
    }, 

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "User",
        required :true,        
        },

    createdAt:{
            type:Date ,
            default : Date.now,
        },
});

export const Income = mongoose.model("Income" , schema); 
