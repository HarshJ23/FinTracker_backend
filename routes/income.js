import express from 'express' ;
import { addIncome , deleteIncome , editIncome , myIncome } from '../controllers/income.js';
import { isAuth } from "../middlewares/auth.js";

const router = express.Router();

router.post("/addIncome",isAuth,addIncome);

router.get("/myIncome" , isAuth , myIncome);

router.route("/:id").delete(isAuth , deleteIncome);
router.route("/:id").put(isAuth , editIncome);

export default router ;