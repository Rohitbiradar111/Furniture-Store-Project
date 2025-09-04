import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Button, Input } from "../../components";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import clerkAuthService from "../../clerk/auth.js";
import { login as authLogin } from "../../store/authSlice.js";
import { IoMailOutline, IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";

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
        const currentUser = await clerkAuthService.getCurrentUser();
        if (currentUser) {
          dispatch(authLogin(currentUser));
          navigate("/");
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    checkSession();
  }, [dispatch, navigate]);

  const userLogin = async (data) => {
    setError("");
    try {
      await clerkAuthService.login(data);
      const currentUser = await clerkAuthService.getCurrentUser();
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
      await clerkAuthService.HandleGoogleLogin();
    } catch (error) {
      setError("Google login failed. Please try again.");
      console.error(error.message);
    }
  };

  const githubLogin = async () => {
    try {
      await clerkAuthService.HandleGithubLogin();
    } catch (error) {
      setError("Github login failed. Please try again.");
      console.error(error.message);
    }
  };

  const linkedinLogin = async () => {
    try {
      await clerkAuthService.HandleLinkedinLogin();
    } catch (error) {
      setError("Linkedin login failed. Please try again.");
      console.error(error.message);
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
      <div className="flex w-full items-center justify-center">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-md shadow-2xl rounded-3xl scale-[.89] md:scale-100 px-5 pt-8 pb-10 md:skew-x-12 md:-skew-y-12">
            <h1 className="text-3xl md:text-4xl mb-6 text-center md:-skew-x-[12deg] md:skew-y-[11.5deg]">
              Login
            </h1>
            {error && (
              <p className="text-red-600 mb-2 text-center md:-skew-x-[12deg] md:skew-y-[11.5deg]">
                {error}
              </p>
            )}
            {errors.email && (
              <p className="text-red-600 text-center mb-2 md:-skew-x-[12deg] md:skew-y-[11.5deg]">
                Email is required
              </p>
            )}
            {errors.password && (
              <p className="text-red-600 text-center mb-2 md:-skew-x-[12deg] md:skew-y-[11.5deg]">
                Password is required
              </p>
            )}
            <div className="w-full">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <p className="text-lg pl-2 md:-skew-x-[12deg] md:skew-y-[11.5deg]">
                      Email :
                    </p>
                    <Input
                      type="email"
                      name="Email Field"
                      placeholder="Enter your email"
                      className="text-left w-full rounded-3xl border border-gray-300 px-4 py-2 text-base text-black md:-skew-x-[12deg] md:skew-y-[11.5deg] focus-within:outline-dashed focus-within:outline-blue-500"
                      prefix={
                        <IoMailOutline className="md:h-5 md:w-6 object-contain mr-2 h-4 w-5 text-gray-400 scale-105" />
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
                    <p className="text-lg pl-2 md:-skew-x-[12deg] md:skew-y-[11.5deg]">
                      Password :
                    </p>
                    <Input
                      name="Password Field"
                      placeholder="Enter your password"
                      className="w-full rounded-2xl border border-gray-300 px-20 py-2 text-base text-black md:-skew-x-[12deg] md:skew-y-[11.5deg] focus-within:outline-dashed focus-within:outline-blue-500"
                      id="pass"
                      type={showPassword ? "text" : "password"}
                      prefix={
                        <RiLockPasswordLine className="h-5 w-6 object-contain mr-2 text-gray-400" />
                      }
                      suffix={
                        <button
                          type="button"
                          className="border-none bg-transparent"
                          onClick={() => setShowPassword((prev) => !prev)}
                        >
                          {showPassword ? (
                            <IoEyeOffOutline className="h-5 w-5" />
                          ) : (
                            <IoEyeOutline className="h-5 w-5" />
                          )}
                        </button>
                      }
                      {...register("password", { required: true })}
                    />
                  </div>
                </div>
                <Button
                  className="md:-skew-x-[12deg] md:skew-y-[11.5deg] w-full rounded-2xl py-3 font-semibold text-base bg-blue-500 text-white hover:bg-blue-700"
                  onClick={handleSubmit(userLogin)}
                >
                  LOGIN
                </Button>
                <div className="flex items-center justify-center gap-2 md:-skew-x-[12deg] md:skew-y-[11.5deg]">
                  <div className="h-px flex-1 bg-gray-200" />
                  <p className="text-base md:text-lg font-normal">Or</p>
                  <div className="h-px flex-1 bg-gray-200" />
                </div>
                <div className="flex justify-center gap-1 flex-wrap md:-skew-x-[12deg] md:skew-y-[11.5deg]">
                  <Button
                    title="Sign in with Github"
                    className="w-24 rounded-xl p-2"
                    onClick={githubLogin}
                  >
                    <img
                      src="images/img_github_logo.svg"
                      alt="github logo"
                      className="h-6 w-6"
                      loading="lazy"
                      draggable="false"
                    />
                  </Button>
                  <Button
                    title="Sign in with Google"
                    className="w-24 rounded-xl p-2"
                    onClick={googleLogin}
                  >
                    <img
                      src="images/img_google_logo.svg"
                      alt="google logo"
                      className="h-6 w-6"
                      loading="lazy"
                      draggable="false"
                    />
                  </Button>
                  <Button
                    title="Sign in with Linkedin"
                    className="w-24 rounded-xl p-2"
                    onClick={linkedinLogin}
                  >
                    <img
                      src="images/img_linkedin_logo.svg"
                      alt="linkedin logo"
                      className="h-8 w-8"
                      loading="lazy"
                      draggable="false"
                    />
                  </Button>
                </div>
                <div className="flex items-center justify-center gap-2 md:-skew-x-[12deg] md:skew-y-[11.5deg]">
                  <div className="h-px flex-1 bg-gray-200" />
                  <p className="text-base md:text-lg font-normal">Or</p>
                  <div className="h-px flex-1 bg-gray-200" />
                </div>
                <Button
                  className="md:-skew-x-[12deg] md:skew-y-[11.5deg] w-full rounded-2xl py-3 font-semibold text-base bg-blue-500 text-white hover:bg-blue-700"
                  onClick={handleGuestLogin}
                >
                  {guestLoginText}
                </Button>
                <div className="flex justify-center flex-wrap gap-2 md:-skew-x-[12deg] md:skew-y-[11.5deg]">
                  <p className="text-lg font-normal">New to FurniStore ?</p>
                  <Link to="/signup">
                    <p className="text-lg font-medium underline text-blue-500 hover:text-blue-700">
                      Sign Up
                    </p>
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
