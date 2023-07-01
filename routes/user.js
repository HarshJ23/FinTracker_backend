import  express  from "express";
import {register , login , logout , profile} from "../controllers/user.js";
// import { isAuth } from "../controllers/user.js";
import { isAuth } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register" , register);

router.post("/login" , login);

router.get("/logout" , logout);

router.get("/profile", isAuth , profile);


// router.post("/login" , login);


export default router ;