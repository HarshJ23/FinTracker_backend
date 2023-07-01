import express from "express" ; 
import { addExpense , deleteExpense , editExpense, myExpense } from "../controllers/expense.js";
import { isAuth } from "../middlewares/auth.js";

const router = express.Router();


router.post("/addExpense",isAuth,addExpense );
router.get("/myExpense" , isAuth , myExpense);

router.route("/:id").delete( isAuth , deleteExpense);
router.route("/:id").put(isAuth , editExpense);

export default router ; 