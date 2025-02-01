import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import authService from "appwrite/auth";

const Protected = ({ children, authentication = true }) => {

    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector((state) => state.auth.status);

    useEffect(() => {
        const verifyAuth = async () => {
            const currentUser = await authService.getCurrentUser();
            const isAuthenticated = !!currentUser;

            if (authentication && !isAuthenticated) {
                navigate("/login");
            } else if (!authentication && isAuthenticated) {
                navigate("/");
            }
            setLoader(false);
        };

        verifyAuth();
    }, [authStatus, navigate, authentication]);

    return loader ? <h1 className="flex justify-center mt-52 text-6xl font-serif">Loading...</h1> : <>{children}</>;
};

export default Protected;
