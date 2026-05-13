import app from "./src/app.js"
import "./src/config/db.js"
app.listen(3000,()=>{
    console.log("Server is running on port 3000.");
})