import bcrypt from "bcryptjs";
import {createUser,findUserByEmail,verifyUser} from "../models/user.model.js";
import {createVerificationCode,findVerificationCode} from "../models/verification.model.js"
import sendEmail from "../services/email.service.js"
import jwt from 'jsonwebtoken'
// CUSTOMER REGISTER
export const registerCustomer = async (req, res) => {

    try {

        const {first_name,last_name,email,password} = req.body;

        // validation
        if (!first_name || !last_name ||!email ||!password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // check existing user
        const existingUser = await findUserByEmail(email);

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Email already registered"
            });
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // create customer
        const result = await createUser({
            first_name,
            last_name,
            email,
            password: hashedPassword,
            role: "customer"
        });
         // generate verification code
        const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
        await createVerificationCode({
            user_id: result.insertId,
            verification_code: verificationCode,
            expires_at: new Date(Date.now() + 10 * 60 * 1000)
        });

        // send email
        await sendEmail(
            email,
            "Email Verification",
            `Your verification code is ${verificationCode}`
        );

        return res.status(201).json({
            success: true,
            message:"Customer registered successfully. Verification email sent."
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};


// ADMIN REGISTER
export const registerAdmin = async (req, res) => {

    try {

        const {first_name,last_name,email,password} = req.body;

        // validation
        if (!first_name || !last_name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // check existing user
        const existingUser = await findUserByEmail(email);

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Email already registered"
            });
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // create admin
        const result = await createUser({first_name,last_name,email,password: hashedPassword,role: "admin"});
         // generate verification code
        const verificationCode =
            Math.floor(100000 + Math.random() * 900000).toString();

        // save verification code
        await createVerificationCode({
            user_id: result.insertId,
            verification_code: verificationCode,
            expires_at: new Date(Date.now() + 10 * 60 * 1000)
        });

        // send email
        await sendEmail(
            email,
            "Email Verification",
            `Your verification code is ${verificationCode}`
        );

        return res.status(201).json({
            success: true,
            message:"Admin registered successfully. Verification email sent."
        });
    } catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

export const verifyEmail = async (req, res) => {

    try {

        const {email,verification_code} = req.body;

        // validation
        if (!email || !verification_code) {
            return res.status(400).json({
                success: false,
                message: "Email and verification code are required"
            });
        }

        // find user
        const user = await findUserByEmail(email);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        // find verification code
        const verificationData = await findVerificationCode(user.id,verification_code);
        if (!verificationData) {
            return res.status(400).json({
                success: false,
                message: "Invalid verification code"
            });
        }

        // check expiry
        if (new Date() >new Date(verificationData.expires_at)) {
            return res.status(400).json({
                success: false,
                message: "Verification code expired"
            });
        }

        // verify user
        await verifyUser(user.id);

        return res.status(200).json({
            success: true,
            message: "Email verified successfully"
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

export const adminLogin = async (req, res) => {

    try {
        const {email,password} = req.body;
        // validation
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            });
        }
        // find user
        const user = await findUserByEmail(email);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Invalid credentials"
            });
        }
        // check role
        if (user.role !== "admin") {
            return res.status(403).json({
                success: false,
                message:"You are not allowed to login from here"
            });
        }
        // check verification
        if (!user.is_verified) {
            return res.status(403).json({
                success: false,
                message:"Please verify your email first"
            });
        }

        // compare password
        const isMatch = await bcrypt.compare(password,user.password);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            });
        }
        // generate jwt token
        const token = jwt.sign({id: user.id,role: user.role},process.env.JWT_SECRET,{expiresIn: "7d"});
        res.cookie('token',token);
        return res.status(200).json({
            success: true,
            message: "Admin login successful",
            token
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};
// CUSTOMER PROFILE
export const customerProfile = async (req,res) => {
    try {
        return res.status(200).json({
            success: true,
            message: "Customer profile fetched successfully",
            user: req.user
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};
// ADMIN PROFILE
export const adminProfile = async (req,res) => {
    try {
        return res.status(200).json({
            success: true,
            message: "Admin profile fetched successfully",
            user: req.user
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};