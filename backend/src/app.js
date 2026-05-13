import express from "express"
import dotenv from 'dotenv'
dotenv.config();
import cookieParser from 'cookie-parser'
import authRoute from './routes/auth.routes.js'
const app = express();
app.get("/", (req, res) => {
    res.send("Backend Running");
});
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth',authRoute);
export default app;