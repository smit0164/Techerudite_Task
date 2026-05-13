const Home = () => {

    return (

        <div className="min-h-[600px] flex items-center justify-center bg-gray-50 px-6">

            <div className="max-w-3xl w-full text-center">

                {/* Heading */}
                <h1 className="text-5xl font-bold text-gray-800 mb-6">
                    Welcome to Auth System
                </h1>

                {/* Description */}
                <p className="text-lg text-gray-600 leading-8 mb-10">

                    This project is a secure authentication
                    system built using React.js, Node.js,
                    Express.js, MySQL, JWT Authentication
                    and Redux Toolkit.

                    <br /><br />

                    The application supports:

                </p>

                {/* Features */}
                <div className="bg-white shadow-md rounded-2xl border border-gray-200 p-8 text-left">

                    <ul className="space-y-4 text-gray-700 text-lg">

                        <li>
                            ✅ Customer Registration
                        </li>

                        <li>
                            ✅ Admin Registration
                        </li>

                        <li>
                            ✅ Email Verification
                        </li>

                        <li>
                            ✅ JWT Authentication
                        </li>

                        <li>
                            ✅ Role-Based Access Control
                        </li>

                        <li>
                            ✅ Protected Routes
                        </li>

                        <li>
                            ✅ Secure Cookie Authentication
                        </li>

                    </ul>

                </div>

            </div>

        </div>
    );
};

export default Home;