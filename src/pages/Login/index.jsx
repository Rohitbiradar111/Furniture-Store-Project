import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Input, Heading } from "../../components";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import authService from "../../appwrite/auth.js";
import { login as authLogin } from "../../store/authSlice.js";

export default function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const authStatus = useSelector((state) => state.auth.status);

    useEffect(() => {
        if (authStatus) navigate("/");
    }, [authStatus, navigate]);

    useEffect(() => {
        const checkSession = async () => {
            try {
                const currentUser = await authService.getCurrentUser();
                if (currentUser) {
                    dispatch(authLogin(currentUser));
                    navigate("/");
                }
            } catch (error) {
                console.log("No active session");
            }
        };
        checkSession();
    }, [dispatch, navigate]);

    const userLogin = async (data) => {
        setError("");
        try {
            await authService.login(data);

            const currentUser = await authService.getCurrentUser();

            if (currentUser) {
                dispatch(authLogin(currentUser));
                navigate("/");
            } else {
                setError("Failed to retrieve user data.");
            }
        } catch (error) {
            setError(error.message);
        }
    }

    const googleLogin = async () => {
        try {
            await authService.HandleGoogleLogin();
        } catch (error) {
            setError("Google login failed. Please try again.");
            console.error("Google Login Error:", error.message);
        }
    }

    const githubLogin = async () => {
        try {
            await authService.HandleGithubLogin();
        } catch (error) {
            setError("Github login failed. Please try again.");
            console.error("Github Login Error:", error.message);
        }
    }

    const linkedinLogin = async () => {
        try {
            await authService.HandleLinkedinLogin();
        } catch (error) {
            setError("Linkedin login failed. Please try again.");
            console.error("Linkedin Login Error:", error.message);
        }
    }

    return (
        <>
            <Helmet>
                <title>Login - FurniStore</title>
                <meta
                    name="description"
                    content="Sign in to your FurniStore account to explore our exclusive offers, new arrivals, and more. Register now if you're new."
                />
            </Helmet>
            <div className="flex h-[940px] w-full items-center justify-center bg-white-a700 bg-[url(/images/img_signin.png)] bg-cover bg-no-repeat md:h-auto md:py-5">
                <div className="container-xs flex justify-center md:px-5">
                    <div className="w-[50%] rounded-[24px] bg-white-a700 py-[38px] md:w-full sm:py-5 px-10">
                        <Heading as="h1" className="text-[48px] font-medium mb-6">
                            Login
                        </Heading>
                        {
                            error && <p className="text-red-600 mb-1 text-center">
                                {error}
                            </p>
                        }
                        {
                            errors.email && <p className="text-red-600 text-center mb-1">Invalid email address</p>
                        }
                        {
                            errors.password && <p className="text-red-600 text-center mb-2">Password is required</p>
                        }
                        <div className="w-full self-stretch">
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col gap-3.5">
                                    <div className="flex flex-col gap-1.5">
                                        <div className="flex px-4">
                                            <Text size="texts" as="p" className="text-[18px] font-sans !text-black-900">
                                                Email :
                                            </Text>
                                        </div>
                                        <Input
                                            shape="round"
                                            type="email"
                                            name="Email Field"
                                            placeholder={`Enter your email`}
                                            className="gap-1.5 rounded-[24px] 
                                            px-3.5 text-[16px] !text-black-900"
                                            prefix={
                                                <Img
                                                    src="images/img_checkmark_gray_500.svg"
                                                    alt="email logo"
                                                    className="h-[22px] w-[24px] object-contain" />
                                            }
                                            {
                                            ...register("email", {
                                                required: true, validate: {
                                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                                        "Email address must be a valid address"
                                                }
                                            })
                                            }
                                        />
                                    </div>
                                    <div className="flex flex-col items-end 
                                    gap-2.5">
                                        <div className="flex flex-col gap-1.5 self-stretch">
                                            <div className="flex px-4">
                                                <Text size="texts" as="p" className="text-[18px] font-sans !text-black-900">
                                                    Password :
                                                </Text>
                                            </div>
                                            <Input
                                                shape="round"
                                                name="Password Field"
                                                placeholder={`Enter your password`}
                                                className="gap-1.5 rounded-[24px] px-3.5 text-[16px] !text-black-900"
                                                id="pass"
                                                type={
                                                    showPassword ? "text" : "password"
                                                }
                                                prefix={
                                                    <Img
                                                        src="images/img_location_gray_500.svg"
                                                        alt="password logo"
                                                        className="h-[22px] w-[24px] object-contain"
                                                    />
                                                }
                                                suffix={
                                                    <button
                                                        type="button"
                                                        className="border-none"
                                                        onClick={() => {
                                                            setShowPassword((prev) => !prev);
                                                        }}
                                                    >
                                                        {showPassword ? (<Img title="Hide password" src="images/img_eye_close.svg" alt="hide password" />) : (<Img title="Show password" src="images/img_eye_open.svg" alt="show password" />)}
                                                    </button>
                                                }
                                                {
                                                ...register("password", { required: true })
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    size="5xl"
                                    variant="fill"
                                    shape="round"
                                    className="self-stretch rounded-[24px] px-[34px] font-semibold sm:px-5 text-base active:bg-green-500"
                                    onClick={handleSubmit(userLogin)}
                                >
                                    LOGIN
                                </Button>
                                <div className="flex items-center justify-center gap-8 sm:flex-col">
                                    <div className="h-px flex-1 bg-gray-200_01 sm:self-stretch" />
                                    <Text as="p" className="text-[16px] font-normal !text-black-900">
                                        Or
                                    </Text>
                                    <div className="h-px flex-1 bg-gray-200_01 sm:self-stretch" />
                                </div>
                                <div className="flex justify-center gap-4 sm:flex-col">
                                    <Button
                                        title="Sign in with Github"
                                        color="white_A700"
                                        size="7xl"
                                        variant="fill"
                                        className="w-[140px] rounded-[16px] border border-solid border-gray-200_01 px-3"
                                        onClick={githubLogin}
                                    >
                                        <Img src="images/img_github_logo.svg"
                                            alt="github logo" />
                                    </Button>
                                    <Button
                                        title="Sign in with Google"
                                        color="white_A700"
                                        size="7xl"
                                        variant="fill"
                                        className="w-[140px] rounded-[16px] border border-solid border-gray-200_01 px-3"
                                        onClick={googleLogin}
                                    >
                                        <Img src="images/img_google_logo.svg"
                                            alt="google logo" />
                                    </Button>
                                    <Button
                                        title="Sign in with Linkedin"
                                        color="white_A700"
                                        size="7xl"
                                        variant="fill"
                                        className="w-[140px] rounded-[16px] border border-solid border-gray-200_01 px-3"
                                        onClick={linkedinLogin}
                                    >
                                        <Img src="images/img_linkedin_logo.svg" alt="linkedin logo" />
                                    </Button>
                                </div>
                                <div className="flex flex-wrap">
                                    <Text size="texts" as="p"
                                        className="text-[18px] font-normal !text-black-900">
                                        New to FurniStore?&nbsp;
                                    </Text>
                                    <Link to="/signup">
                                        <Text size="texts" as="p"
                                            className="text-[18px] font-medium text-lime-900 underline">
                                            Sign Up
                                        </Text>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </div >
        </>
    );
}