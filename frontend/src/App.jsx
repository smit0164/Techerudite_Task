import { useState } from 'react'

import CustomerRegister from "./pages/CustomerRegister";
import AdminRegister from "./pages/AdminRegister";
import VerifyEmail from "./pages/VerifyEmail";
import AdminLogin from "./pages/AdminLogin";
import CustomerProfile from "./pages/CustomerProfile";
import AdminProfile from "./pages/AdminProfile";
import Home from './pages/Home';
import CustomerLogin from './pages/CustomerLogin';
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="w-full max-w-5xl min-h-[700px] bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-200">
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/customer-register" element={<CustomerRegister />}/>
            <Route path="/admin-register" element={<AdminRegister />}/>
            <Route path="/verify-email" element={<VerifyEmail />}/>
            <Route path="/admin-login" element={<AdminLogin />}/>
            <Route path="/customer-login" element={<CustomerLogin />}/>
            <Route path="/customer/profile" element={<ProtectedRoute role="customer"><CustomerProfile /></ProtectedRoute>}/>
            <Route path="/admin/profile"element={<ProtectedRoute role="admin"><AdminProfile /></ProtectedRoute>}/>
        </Routes>

      </div>

    </div>
  )
}

export default App
