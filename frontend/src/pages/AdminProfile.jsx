import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";

import api from "../services/api";

const AdminProfile = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetchProfile();

    }, []);

    const fetchProfile = async () => {

        try {

            const response = await api.get(
                "/auth/admin/profile"
            );
            console.log(response);
            setUser(response.data.user);

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Unauthorized"
            );

            navigate("/admin-login");

        } finally {

            setLoading(false);
        }
    };


    if (loading) {

        return (

            <div className="min-h-[700px] flex items-center justify-center">

                <h1 className="text-2xl font-bold text-gray-700">
                    Loading...
                </h1>

            </div>
        );
    }

    return (

        <div className="min-h-[700px] flex items-center justify-center bg-gray-50 p-6">

            <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8 border border-gray-200">

                <div className="flex items-center justify-between mb-8">

                    <h2 className="text-3xl font-bold text-gray-800">
                        Admin Profile
                    </h2>

                </div>

                <div className="space-y-5">

                    {/* First Name */}
                    <div className="border rounded-xl p-4">

                        <p className="text-sm text-gray-500">
                            First Name
                        </p>

                        <h3 className="text-lg font-semibold text-gray-800">
                            {user?.first_name || "N/A"}
                        </h3>

                    </div>

                    {/* Last Name */}
                    <div className="border rounded-xl p-4">

                        <p className="text-sm text-gray-500">
                            Last Name
                        </p>

                        <h3 className="text-lg font-semibold text-gray-800">
                            {user?.last_name || "N/A"}
                        </h3>

                    </div>

                    {/* Email */}
                    <div className="border rounded-xl p-4">

                        <p className="text-sm text-gray-500">
                            Email
                        </p>

                        <h3 className="text-lg font-semibold text-gray-800">
                            {user?.email || "N/A"}
                        </h3>

                    </div>

                    {/* Role */}
                    <div className="border rounded-xl p-4">

                        <p className="text-sm text-gray-500">
                            Role
                        </p>

                        <h3 className="text-lg font-semibold text-gray-800 capitalize">
                            {user?.role || "N/A"}
                        </h3>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default AdminProfile;