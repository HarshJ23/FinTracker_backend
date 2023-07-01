import { Expense } from "../models/expense.js";


// add transaction(expense)
export const addExpense = async (req, res)=>{

    const {amount , category} = req.body; 
    const expense = await Expense.create({
        amount, 
        category, 
        user : req.user , 
    });
console.log(expense);

    res.status(201).json({
        success : true , 
        message : "Transaction added", 
    });
};

// delete expense transaction
export const deleteExpense  = async (req, res)=>{
    const expense = await Expense.findById(req.params.id);
     if(!expense){
        return res.json({
            success : false , 
            message: "error occured" , 
        });
     };
    await expense.deleteOne();
    res.status(201).json({
        success : true ,
        message: "Transaction deleted", 
     });
};


// edit expense details
export const editExpense =  async (req, res)=>{
const expense = await Expense.findById(req.params.id);
    if(!expense){
        return res.json({
            success : false , 
            message: "error occured" , 
        });
        };
    
    const {amount , category} = req.body; 
    expense.amount = amount ;
    expense.category = category; 

    await expense.save();
    res.status(201).json({
        Success : true , 
        message: "Task updated"
     });

}


export const myExpense =async(req, res)=>{

    let userid = req.user._id ;

    let myExpense = await Expense.find({user : userid});
    // let  amount = myIncome.amount ;
    res.status(201).json({
        success : true,
        myExpense ,
       
     });


}
