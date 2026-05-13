import { useState } from "react";
import { Link, useNavigate } from "react-router";
import api from "../services/api";
import { toast } from "react-hot-toast";
function CustomerRegister() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!firstName ||!lastName || !email ||!password) {
            toast.error("All fields are required");
            return;
        }
        try {
            setLoading(true);
            const response = await api.post("/auth/register/customer",
                {
                    first_name: firstName,
                    last_name: lastName,
                    email,
                    password
                }
            );
            toast.success(response.data.message);
            navigate("/verify-email");
        } catch (error) {
            toast.error("Something went wrong");
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="min-h-[700px] flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Customer Register</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* First Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            First Name
                        </label>
                        <input type="text" value={firstName}
                            onChange={(e) =>
                                setFirstName(e.target.value)
                            }
                            placeholder="Enter first name"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
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
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
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
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
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
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                        />

                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-semibold"
                    >
                        {
                            loading
                                ? "Registering..."
                                : "Register"
                        }
                    </button>

                </form>

                <div className="mt-6 text-center text-sm text-gray-600">

                    Already have an account?

                    <Link
                        to="/customer-login"
                        className="text-blue-600 ml-1 hover:underline"
                    >
                        Login
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default CustomerRegister;