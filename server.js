import {app} from "./app.js" ;
import { connectDB } from "./db/database.js";

connectDB();



app.listen(4000 , ()=>{
    console.log("server live at localhost:4000");
});