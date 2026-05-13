import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";

import api from "../services/api";

const VerifyEmail = () => {
    const [email, setEmail] = useState("");
    const [verificationCode, setVerificationCode] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // validation
        if (!email || !verificationCode) {
            return toast.error(
                "All fields are required"
            );
        }
        try {
            setLoading(true);
            const response = await api.post(
                "/auth/verify-email",
                {
                    email,
                    verification_code: verificationCode
                }
            );
            toast.success(
                response.data.message
            );
            console.log(response.data);
            if (response.data.role === "admin") {
                navigate("/admin-login");
            } else {
                navigate("/customer-login");
            }
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
                    Verify Email
                </h2>

                <p className="text-center text-gray-500 mb-8">
                    Enter your verification code
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

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
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                        />

                    </div>

                    {/* Verification Code */}
                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Verification Code
                        </label>

                        <input
                            type="text"
                            value={verificationCode}
                            onChange={(e) =>
                                setVerificationCode(
                                    e.target.value
                                )
                            }
                            placeholder="Enter verification code"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                        />

                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-green-600 hover:bg-green-700 transition text-white py-3 rounded-lg font-semibold"
                    >
                        {
                            loading
                                ? "Verifying..."
                                : "Verify Email"
                        }
                    </button>

                </form>

            </div>

        </div>
    );
};

export default VerifyEmail;