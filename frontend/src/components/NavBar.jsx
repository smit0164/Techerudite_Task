import { Link, useNavigate } from "react-router";

import { useDispatch, useSelector } from "react-redux";

import { logoutUser } from "../redux/slices/authSlice";

import { toast } from "react-hot-toast";

import api from "../services/api";

const Navbar = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const {
        isAuthenticated,
        user
    } = useSelector(
        (state) => state.auth
    );

    const handleLogout = async () => {

        try {
        
            await api.post("/auth/logout");
            dispatch(logoutUser());
            toast.success("Logged out");
            navigate("/");

        } catch (error) {

            toast.error("Logout failed");
        }
    };

    return (

        <nav className="bg-white shadow-md border-b">

            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link
                    to="/"
                    className="text-2xl font-bold text-black"
                >
                    Auth System
                </Link>

                {/* Right Side */}
                <div className="flex items-center gap-4">

                    {
                        !isAuthenticated ? (
                            <>

                                <Link
                                    to="/customer-register"
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
                                >
                                    Customer Register
                                </Link>

                                <Link
                                    to="/admin-register"
                                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
                                >
                                    Admin Register
                                </Link>

                                <Link
                                    to="/admin-login"
                                    className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition"
                                >
                                    Admin Login
                                </Link>

                            </>
                        ) : (
                            <>

                                {/* Role Based Button */}
                                {
                                    user?.role === "admin" ? (

                                        <Link
                                            to="/admin/profile"
                                            className="bg-black text-white px-4 py-2 rounded-lg"
                                        >
                                            Admin Profile
                                        </Link>

                                    ) : (

                                        <Link
                                            to="/customer/profile"
                                            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                                        >
                                            Customer Profile
                                        </Link>
                                    )
                                }

                                {/* Logout */}
                                <button
                                    onClick={handleLogout}
                                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                                >
                                    Logout
                                </button>

                            </>
                        )
                    }

                </div>

            </div>

        </nav>
    );
};

export default Navbar;