import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-hot-toast";

import api from "../services/api";

const AdminRegister = () => {

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");

    const [lastName, setLastName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();

        // validation
        if (
            !firstName ||
            !lastName ||
            !email ||
            !password
        ) {

            return toast.error(
                "All fields are required"
            );
        }

        try {

            setLoading(true);

            const response = await api.post(
                "/auth/register/admin",
                {
                    first_name: firstName,
                    last_name: lastName,
                    email,
                    password
                }
            );

            toast.success(
                response.data.message
            );

            navigate("/verify-email");

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Something went wrong"
            );

        } finally {

            setLoading(false);
        }
    };

    return (

        <div className="min-h-[700px] flex items-center justify-center bg-gray-50">

            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border border-gray-200">

                <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
                    Admin Register
                </h2>

                <p className="text-center text-gray-500 mb-8">
                    Create your admin account
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    {/* First Name */}
                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            First Name
                        </label>

                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) =>
                                setFirstName(e.target.value)
                            }
                            placeholder="Enter first name"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                        />

                    </div>

                    {/* Last Name */}
                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name
                        </label>

                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) =>
                                setLastName(e.target.value)
                            }
                            placeholder="Enter last name"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                        />

                    </div>

                    {/* Email */}
                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            placeholder="Enter email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                        />

                    </div>

                    {/* Password */}
                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>

                        <input
                            type="password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            placeholder="Enter password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                        />

                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-black hover:bg-gray-800 transition text-white py-3 rounded-lg font-semibold"
                    >
                        {
                            loading
                                ? "Registering..."
                                : "Register"
                        }
                    </button>

                </form>

                {/* Links */}
                <div className="mt-6 text-center text-sm text-gray-600">

                    Already have an account?

                    <Link
                        to="/admin-login"
                        className="text-black ml-1 hover:underline"
                    >
                        Login
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default AdminRegister;