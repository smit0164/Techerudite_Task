# Authentication System

A full-stack Authentication System built using React.js, Node.js, Express.js, MySQL, JWT Authentication, Redux Toolkit, and Tailwind CSS.

The application supports role-based authentication for both Admin and Customer users with secure email verification and protected routes.

---

# Tech Stack

## Frontend

* React.js
* React Router
* Redux Toolkit
* Axios
* Tailwind CSS
* React Hot Toast

## Backend

* Node.js
* Express.js
* MySQL
* JWT Authentication
* Nodemailer
* bcryptjs
* Cookie Parser

---

# Features

## Authentication Features

* Customer Registration
* Admin Registration
* Email Verification System
* Secure Password Hashing
* JWT Authentication
* Cookie-Based Authentication
* Role-Based Access Control
* Protected Routes
* Logout Functionality

## Admin Features

* Admin Login
* Admin Profile Page
* Protected Admin Routes

## Customer Features

* Customer Login
* Customer Profile Page
* Protected Customer Routes

## Validation & Security

* Form Validation
* Secure Cookies
* Email Verification Expiry
* Unauthorized Route Protection
* Role Restriction

---

# Project Structure

## Frontend Structure
<img width="1063" height="722" alt="image" src="https://github.com/user-attachments/assets/0512a4a4-c008-4f58-aaa4-e78a0076f7bb" />

## Backend Structure
<img width="1082" height="650" alt="image" src="https://github.com/user-attachments/assets/18d51333-b2b5-4552-902d-c1d8b009e27f" />


# Database Schema

## users Table

| Column      | Type                  |
| ----------- | --------------------- |
| id          | INT                   |
| first_name  | VARCHAR               |
| last_name   | VARCHAR               |
| email       | VARCHAR               |
| password    | VARCHAR               |
| role        | ENUM(admin, customer) |
| is_verified | BOOLEAN               |
| created_at  | TIMESTAMP             |

## email_verifications Table

| Column            | Type      |
| ----------------- | --------- |
| id                | INT       |
| user_id           | INT       |
| verification_code | VARCHAR   |
| expires_at        | DATETIME  |
| created_at        | TIMESTAMP |

---

# API Endpoints

## Authentication APIs

| Method | Endpoint                    | Description           |
| ------ | --------------------------- | --------------------- |
| POST   | /api/auth/register/customer | Customer Registration |
| POST   | /api/auth/register/admin    | Admin Registration    |
| POST   | /api/auth/verify-email      | Verify Email          |
| POST   | /api/auth/admin/login       | Admin Login           |
| POST   | /api/auth/customer/login    | Customer Login        |
| GET    | /api/auth/admin/profile     | Admin Profile         |
| GET    | /api/auth/customer/profile  | Customer Profile      |
| POST   | /api/auth/logout            | Logout User           |

---

# Environment Variables

## Backend `.env`

```env
# DATABASE
DB_HOST=your_host_name
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=auth_system

# EMAIL
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_google_app_password

# JWT
JWT_SECRET=your_secret_key
```

---

# Installation Guide

## Backend Setup

```bash
cd backend
npm install
npm run dev
```

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# Authentication Flow

## Registration Flow

1. User registers
2. Verification code is generated
3. Verification email is sent
4. User enters verification code
5. Account becomes verified

## Login Flow

1. User enters credentials
2. JWT token is generated
3. Token stored in cookies
4. Protected routes become accessible

---

# Screenshots

## Frontend Screenshots

Add your screenshots here:

* Home Page
  <img width="1347" height="865" alt="image" src="https://github.com/user-attachments/assets/20fc38e0-6c85-44c2-8cb0-1f8d92d0f869" />
* Customer Register Page
  <img width="1252" height="853" alt="image" src="https://github.com/user-attachments/assets/2f7323e8-6fe7-4864-ad32-e181c99cdfbd" />
* Customer Login Page
  <img width="1297" height="852" alt="image" src="https://github.com/user-attachments/assets/db8698c9-4208-4b11-a20d-cd262bb9bfa8" />
* Admin Register Page
  <img width="1158" height="827" alt="image" src="https://github.com/user-attachments/assets/cd7988f6-b5f0-4712-a6c6-0ea6b5ed419c" />
* Admin Login Page
  <img width="1157" height="827" alt="image" src="https://github.com/user-attachments/assets/d3e464ea-f185-4bbc-813a-800c7dd3d814" />
* Verify Email Page
 <img width="1158" height="827" alt="image" src="https://github.com/user-attachments/assets/de9b35e4-8a22-489e-9053-72d3a3a28cea" />

# Postman API Collection

Public Postman Collection Link:

https://www.postman.com/bankledgerteam/seperate-panel-system-task/request/569hknu/verify-email?sideView=agentMode

1.Customer Register Api
<img width="1810" height="887" alt="image" src="https://github.com/user-attachments/assets/040e7a18-51ea-4787-94bb-2ffad24209c2" />
2.Verify Email Api
<img width="1442" height="878" alt="image" src="https://github.com/user-attachments/assets/1e1f87de-b524-45e0-8de2-555f93ed4681" />
3.Customer login Api
<img width="1438" height="887" alt="image" src="https://github.com/user-attachments/assets/01d3f719-4448-44b6-9158-7035461fdaf0" />
4.Admin Register Api
<img width="1433" height="858" alt="image" src="https://github.com/user-attachments/assets/78520d80-ef56-4cef-b65f-bc5184eb10f5" />
5.Admin login api
<img width="1428" height="872" alt="image" src="https://github.com/user-attachments/assets/8c694ab4-0e8d-42bf-9990-a6b420cda235" />
6.Admin Profile api
<img width="1438" height="870" alt="image" src="https://github.com/user-attachments/assets/6db89fc4-6d2a-499e-b01a-67071c2827e1" />

---

# Security Features

* Password Hashing using bcryptjs
* JWT Authentication
* Secure Cookie Storage
* Role-Based Authorization
* Protected Backend Routes
* Email Verification
* Unauthorized Access Prevention

---

# Future Improvements

* Refresh Token Authentication
* Forgot Password Feature
* OTP Resend Functionality
* Better UI/UX Enhancements
* Deployment Support
* Docker Support

---



---

# Conclusion

This project demonstrates a complete authentication workflow with secure backend architecture, role-based access control, JWT authentication, email verification, and protected frontend routes using modern full-stack technologies.
