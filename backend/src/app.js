import express from "express"
import dotenv from 'dotenv'
dotenv.config();
import cookieParser from 'cookie-parser'
import authRoute from './routes/auth.routes.js'
import cors from "cors";
const app = express();
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true
    })
);
app.get("/", (req, res) => {
    res.send("Backend Running");
});
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth',authRoute);
export default app;