import { Navigate } from "react-router";

import { useSelector } from "react-redux";

const ProtectedRoute = ({children,role}) => {
    const {isAuthenticated,user} = useSelector((state) => state.auth);
    console.log(isAuthenticated)
    // not logged in
    if (!isAuthenticated) {
        console.log("hiia")
        return <Navigate to="/" />;
    }
     console.log("hii2")
    // role check
    if (role && user?.role !== role) {
        return <Navigate to="/" />;
    }

    return children;
};

export default ProtectedRoute;