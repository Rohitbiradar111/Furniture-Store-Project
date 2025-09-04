import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import clerkAuthService from "../clerk/auth";
import { BiLoaderCircle } from "react-icons/bi";

const Protected = ({ children, authentication = true }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    const verifyAuth = async () => {
      const currentUser = await clerkAuthService.getCurrentUser();
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

  return loader ? (
    <h1 className="flex justify-center text-center items-center mt-48 text-5xl">
      L<BiLoaderCircle className="animate-spin" />
      ading
    </h1>
  ) : (
    <>{children}</>
  );
};

export default Protected;
