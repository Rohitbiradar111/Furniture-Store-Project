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

export default function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const authStatus = useSelector((state) => state.auth.status);

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

  const createUserAccount = async (data) => {
    setError("");
    try {
      const account = await clerkAuthService.createAccount(data);
      if (account) {
        const userData = await clerkAuthService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const googleLogin = async () => {
    try {
      await clerkAuthService.HandleGoogleLogin();
    } catch (error) {
      setError("Google login failed. Please try again later.");
      console.error(error.message);
    }
  };

  const githubLogin = async () => {
    try {
      await clerkAuthService.HandleGithubLogin();
    } catch (error) {
      setError("Github login failed. Please try again later.");
      console.error(error.message);
    }
  };

  const linkedinLogin = async () => {
    try {
      await clerkAuthService.HandleLinkedinLogin();
    } catch (error) {
      setError("Linkedin login failed. Please try again later.");
      console.error(error.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>Signup - FurniStore</title>
        <meta
          name="description"
          content="Join the FurniStore community. Register for an account to enjoy easy shopping, exclusive offers, and a seamless checkout experience. Sign up now!"
        />
      </Helmet>
      <div className="flex w-full items-center justify-center">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-md shadow-2xl rounded-3xl scale-[.89] md:scale-100 px-5 pt-8 pb-10 md:-skew-x-12 md:skew-y-12">
            <h1 className="text-3xl md:text-4xl mb-6 text-center md:skew-x-[12deg] md:-skew-y-[11.45deg]">
              Signup
            </h1>
            {error && (
              <p className="text-red-600 mb-4 text-center md:skew-x-[12deg] md:-skew-y-[11.45deg]">
                {error}
              </p>
            )}
            {errors.email && (
              <p className="text-red-600 text-center mb-4 md:skew-x-[12deg] md:-skew-y-[11.45deg]">
                Email is required
              </p>
            )}
            {errors.password && (
              <p className="text-red-600 text-center mb-4 md:skew-x-[12deg] md:-skew-y-[11.45deg]">
                Password is required
              </p>
            )}
            {errors.confirmpassword && (
              <p className="text-red-600 text-center mb-4 md:skew-x-[12deg] md:-skew-y-[11.45deg]">
                {errors.confirmpassword.message}
              </p>
            )}
            <div className="w-full">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <p className="text-lg pl-2 md:skew-x-[12deg] md:-skew-y-[11.45deg]">
                      Email:
                    </p>
                    <Input
                      type="email"
                      name="Email Field"
                      placeholder="Enter your email"
                      className="w-full rounded-2xl border border-gray-300 px-4 py-2 text-base text-black md:skew-x-[12deg] md:-skew-y-[11.45deg] focus-within:outline-dashed focus-within:outline-blue-500"
                      prefix={
                        <IoMailOutline className="md:h-5 md:w-6 object-contain mr-2 h-4 w-5 text-gray-400 scale-105" />
                      }
                      {...register("email", {
                        required: true,
                        validate: {
                          matchPatern: (value) =>
                            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                              value
                            ) || "Email address must be valid",
                        },
                      })}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-lg pl-2 md:skew-x-[12deg] md:-skew-y-[11.45deg]">
                      Password:
                    </p>
                    <Input
                      name="Password Field"
                      placeholder="Enter your password"
                      className="w-full rounded-2xl border border-gray-300 px-4 py-2 text-base text-black md:skew-x-[12deg] md:-skew-y-[11.45deg] focus-within:outline-dashed focus-within:outline-blue-500"
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
                  <div className="flex flex-col gap-2">
                    <p className="text-lg pl-2 md:skew-x-[12deg] md:-skew-y-[11.45deg]">
                      Confirm Password:
                    </p>
                    <Input
                      name="Confirm Password Field"
                      placeholder="Confirm your password"
                      className="w-full rounded-2xl border border-gray-300 px-4 py-2 text-base text-black md:skew-x-[12deg] md:-skew-y-[11.45deg] focus-within:outline-dashed focus-within:outline-blue-500"
                      id="confirmpassword"
                      type={showConfirmPassword ? "text" : "password"}
                      prefix={
                        <RiLockPasswordLine className="h-5 w-6 object-contain mr-2 text-gray-400" />
                      }
                      suffix={
                        <button
                          type="button"
                          className="border-none bg-transparent"
                          onClick={() =>
                            setShowConfirmPassword((prev) => !prev)
                          }
                        >
                          {showConfirmPassword ? (
                            <IoEyeOffOutline className="h-5 w-5" />
                          ) : (
                            <IoEyeOutline className="h-5 w-5" />
                          )}
                        </button>
                      }
                      {...register("confirmpassword", {
                        required: true,
                        validate: (value) =>
                          value === password || "Passwords do not match",
                      })}
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3 md:skew-x-[12deg] md:-skew-y-[11.45deg]">
                  <Button
                    className="w-full rounded-2xl py-3 font-semibold text-base bg-blue-500 text-white hover:bg-blue-700"
                    onClick={handleSubmit(createUserAccount)}
                  >
                    SIGNUP
                  </Button>
                  <p className="text-sm font-normal text-center">
                    <span>By clicking Signup you agree to our&nbsp;</span>
                    <span className="font-medium text-blue-500">
                      Terms of use&nbsp;
                    </span>
                    <span>and&nbsp;</span>
                    <span className="font-medium text-blue-500">
                      Privacy Policy
                    </span>
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2 md:skew-x-[12deg] md:-skew-y-[11.45deg]">
                  <div className="h-px flex-1 bg-gray-200" />
                  <p className="text-base md:text-lg font-normal">Or</p>
                  <div className="h-px flex-1 bg-gray-200" />
                </div>
                <div className="flex justify-center gap-1 flex-wrap md:skew-x-[12deg] md:-skew-y-[11.45deg]">
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
                <div className="flex justify-center flex-wrap gap-2 md:skew-x-[12deg] md:-skew-y-[11.45deg]">
                  <p className="text-lg font-normal">Existing User ?</p>
                  <Link to="/login">
                    <p className="text-lg font-medium underline text-blue-500 hover:text-blue-700">
                      Login
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
