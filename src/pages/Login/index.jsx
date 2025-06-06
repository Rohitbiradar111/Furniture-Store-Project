import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Input, Heading } from "../../components";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import authService from "../../appwrite/auth.js";
import { login as authLogin } from "../../store/authSlice.js";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const authStatus = useSelector((state) => state.auth.status);
  const [guestLoginText, setGuestLoginText] = useState("LOGIN AS A GUEST");

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
  };

  const googleLogin = async () => {
    try {
      await authService.HandleGoogleLogin();
    } catch (error) {
      setError("Google login failed. Please try again.");
      console.error("Google Login Error:", error.message);
    }
  };

  const githubLogin = async () => {
    try {
      await authService.HandleGithubLogin();
    } catch (error) {
      setError("Github login failed. Please try again.");
      console.error("Github Login Error:", error.message);
    }
  };

  const linkedinLogin = async () => {
    try {
      await authService.HandleLinkedinLogin();
    } catch (error) {
      setError("Linkedin login failed. Please try again.");
      console.error("Linkedin Login Error:", error.message);
    }
  };

  const handleGuestLogin = () => {
    setValue("email", "rohit@gmail.com");
    setValue("password", "rohit@login");
    setGuestLoginText("PLEASE CLICK THE LOGIN BUTTON NOW");
  };

  return (
    <>
      <Helmet>
        <title>Login - FurniStore</title>
        <meta
          name="description"
          content="Sign in to your FurniStore account to explore our exclusive offers, new arrivals, and more. Register now if you're new."
        />
      </Helmet>
      <div className="flex min-h-screen w-full items-center justify-center bg-white-a700 bg-[url(/images/img_signin.png)] bg-cover bg-no-repeat py-8 md:py-4 sm:py-2">
        <div className="container mx-auto flex justify-center px-4 sm:px-2">
          <div className="w-full max-w-md rounded-2xl bg-white-a700 py-8 px-6 sm:py-4 sm:px-4 shadow-lg">
            <Heading
              as="h1"
              className="text-4xl font-medium mb-6 text-left sm:text-3xl"
            >
              Login
            </Heading>
            {error && <p className="text-red-600 mb-4 text-center">{error}</p>}
            {errors.email && (
              <p className="text-red-600 text-center mb-4">
                Invalid email address
              </p>
            )}
            {errors.password && (
              <p className="text-red-600 text-center mb-4">
                Password is required
              </p>
            )}
            <div className="w-full">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <Text
                      size="texts"
                      as="p"
                      className="text-lg font-sans text-black-900 pl-2"
                    >
                      Email:
                    </Text>
                    <Input
                      shape="round"
                      type="email"
                      name="Email Field"
                      placeholder="Enter your email"
                      className="w-full rounded-2xl px-4 py-2 text-base text-black-900 border border-gray-300 focus:border-lime-900"
                      prefix={
                        <Img
                          src="images/img_checkmark_gray_500.svg"
                          alt="email logo"
                          className="h-5 w-6 object-contain mr-2"
                        />
                      }
                      {...register("email", {
                        required: true,
                        validate: {
                          matchPatern: (value) =>
                            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                              value
                            ) || "Email address must be a valid address",
                        },
                      })}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Text
                      size="texts"
                      as="p"
                      className="text-lg font-sans text-black-900 pl-2"
                    >
                      Password:
                    </Text>
                    <Input
                      shape="round"
                      name="Password Field"
                      placeholder="Enter your password"
                      className="w-full rounded-2xl px-4 py-2 text-base text-black-900 border border-gray-300 focus:border-lime-900"
                      id="pass"
                      type={showPassword ? "text" : "password"}
                      prefix={
                        <Img
                          src="images/img_location_gray_500.svg"
                          alt="password logo"
                          className="h-5 w-6 object-contain mr-2"
                        />
                      }
                      suffix={
                        <button
                          type="button"
                          className="border-none bg-transparent"
                          onClick={() => setShowPassword((prev) => !prev)}
                        >
                          {showPassword ? (
                            <Img
                              title="Hide password"
                              src="images/img_eye_close.svg"
                              alt="hide password"
                              className="h-5 w-5"
                            />
                          ) : (
                            <Img
                              title="Show password"
                              src="images/img_eye_open.svg"
                              alt="show password"
                              className="h-5 w-5"
                            />
                          )}
                        </button>
                      }
                      {...register("password", { required: true })}
                    />
                  </div>
                </div>
                <Button
                  size="5xl"
                  variant="fill"
                  shape="round"
                  className="w-full rounded-2xl py-3 font-semibold text-base bg-lime-900 text-white-a700 hover:bg-lime-800 active:bg-green-500"
                  onClick={handleSubmit(userLogin)}
                >
                  LOGIN
                </Button>
                <div className="flex items-center justify-center gap-4 sm:gap-2">
                  <div className="h-px flex-1 bg-gray-200" />
                  <Text as="p" className="text-base font-normal text-black-900">
                    Or
                  </Text>
                  <div className="h-px flex-1 bg-gray-200" />
                </div>
                <div className="flex justify-center gap-3 sm:gap-2 flex-wrap">
                  <Button
                    title="Sign in with Github"
                    color="white_A700"
                    size="md"
                    variant="fill"
                    className="w-24 rounded-xl px-2 py-2 hover:bg-gray-100"
                    onClick={githubLogin}
                  >
                    <Img
                      src="images/img_github_logo.svg"
                      alt="github logo"
                      className="h-6 w-6"
                    />
                  </Button>
                  <Button
                    title="Sign in with Google"
                    color="white_A700"
                    size="md"
                    variant="fill"
                    className="w-24 rounded-xl px-2 py-2 hover:bg-gray-100"
                    onClick={googleLogin}
                  >
                    <Img
                      src="images/img_google_logo.svg"
                      alt="google logo"
                      className="h-6 w-6"
                    />
                  </Button>
                  <Button
                    title="Sign in with Linkedin"
                    color="white_A700"
                    size="md"
                    variant="fill"
                    className="w-24 rounded-xl px-2 py-2 hover:bg-gray-100"
                    onClick={linkedinLogin}
                  >
                    <Img
                      src="images/img_linkedin_logo.svg"
                      alt="linkedin logo"
                      className="h-6 w-6"
                    />
                  </Button>
                </div>
                <div className="flex items-center justify-center gap-4 sm:gap-2">
                  <div className="h-px flex-1 bg-gray-200" />
                  <Text as="p" className="text-base font-normal text-black-900">
                    Or
                  </Text>
                  <div className="h-px flex-1 bg-gray-200" />
                </div>
                <Button
                  size="5xl"
                  variant="fill"
                  shape="round"
                  className="w-full rounded-2xl py-3 font-semibold text-base bg-lime-900 text-white-a700 hover:bg-lime-800 active:bg-green-500"
                  onClick={handleGuestLogin}
                >
                  {guestLoginText}
                </Button>
                <div className="flex justify-center flex-wrap gap-2">
                  <Text
                    size="texts"
                    as="p"
                    className="text-lg font-normal text-black-900"
                  >
                    New to FurniStore?
                  </Text>
                  <Link to="/signup">
                    <Text
                      size="texts"
                      as="p"
                      className="text-lg font-medium text-lime-900 underline hover:text-lime-800"
                    >
                      Sign Up
                    </Text>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
