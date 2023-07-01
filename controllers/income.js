import {Income} from "../models/income.js";


export const addIncome =  async (req, res)=>{

    const {amount, category , subcategory} = req.body  ;

    const income = await Income.create({
        amount, 
        category,
        subcategory,  
        user:req.user,
    });

console.log(income);

res.json({
    success : true , 
    message: "Added" ,
});
};



export const deleteIncome = async (req, res)=>{
    const income = await Income.findById(req.params.id);
     if(!income){
        return res.json({
            success : false , 
            message: "error occured", 
        });
     };

    await income.deleteOne();
    res.status(201).json({
        success : true ,
        message: "Transaction deleted", 
     });
};


export const editIncome = async(req, res)=>{
    const income = await Income.findById(req.params.id);

   if(!income){
    return res.json({
        success : false ,
        message:"some error occures"
    });
} 

const {amount ,category,subcategory} = req.body;

income.amount = amount ;
income.category = category ;
income.subcategory = subcategory ;

await income.save();

res.status(201).json({
    success : true ,
    message : "edited",
});
};


export const myIncome =async(req, res)=>{

    let userid = req.user._id ;

    let myIncome = await Income.find({user : userid});
    // let  amount = myIncome.amount ;
    res.status(201).json({
        success : true,
        myIncome ,
       
     });


};