import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet";
import { Button, Input } from "../../components";
import conf from "conf/conf";
import { HiArrowLongLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { IoMailOutline } from "react-icons/io5";

export default function Contact() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const sendEmail = (data) => {
    setSuccessMessage("");
    setErrorMessage("");

    emailjs
      .send(
        conf.emailjsServiceId,
        conf.emailjsTemplateId,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        conf.emailjsUserId
      )
      .then(
        () => {
          setSuccessMessage("Your message has been sent successfully!");
          setValue("name", "");
          setValue("email", "");
          setValue("message", "");

          setTimeout(() => {
            setSuccessMessage("");
          }, 5000);
        },
        () => {
          setErrorMessage(
            "Failed to send your message. Please try again later."
          );
        }
      );
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - FurniStore</title>
        <meta
          name="description"
          content="Get in touch with us for inquiries, support, or feedback. We're here to help you."
        />
      </Helmet>
      <div className="flex min-h-screen w-full items-center justify-center md:py-8 py-4">
        <div className="container flex justify-center md:px-5 px-4">
          <div className="border border-black shadow-2xl w-full max-w-md rounded-2xl md:py-8 md:px-6 py-6 px-4">
            <HiArrowLongLeft
              className="w-12 h-8 md:w-10 md:h-8 cursor-pointer"
              title="Go Back To Home Page"
              onClick={() => navigate("/")}
            />
            <h1 className="text-3xl font-medium mb-6 text-center">
              Contact Us
            </h1>
            {successMessage && (
              <p className="text-green-600 mb-4 text-center md:text-base text-sm">
                {successMessage}
              </p>
            )}
            {errorMessage && (
              <p className="text-red-600 mb-4 text-center md:text-base text-sm">
                {errorMessage}
              </p>
            )}
            <div className="w-full">
              <div className="flex flex-col md:gap-6 gap-4">
                <div className="flex flex-col gap-1.5">
                  <div className="flex px-4">
                    <p className="md:text-lg text-base">Full Name :</p>
                  </div>
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    className="text-black md:text-base text-sm focus-within:outline-dashed focus-within:outline-blue-500"
                    {...register("name", { required: "Full name is required" })}
                  />
                  {errors.name && (
                    <p className="text-red-600 md:text-sm mt-1 text-xs">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex px-4">
                    <p className="md:text-lg text-base">Email :</p>
                  </div>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="text-black md:text-base text-sm focus-within:outline-dashed focus-within:outline-blue-500"
                    prefix={
                      <IoMailOutline className="md:h-5 md:w-6 object-contain mr-2 h-4 w-5 text-gray-400 scale-105" />
                    }
                    {...register("email", {
                      required: "Email is required",
                      validate: {
                        matchPatern: (value) =>
                          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                            value
                          ) || "Email address must be valid",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-600 md:text-sm mt-1 text-xs">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex px-4">
                    <p className="md:text-lg text-base">Message :</p>
                  </div>
                  <div className="flex items-center w-full rounded-3xl border border-gray-300 px-3 py-2 focus-within:outline-dashed focus-within:outline-blue-500">
                    <textarea
                      name=""
                      id=""
                      placeholder="Enter your message"
                      className="w-full md:text-base text-sm text-black border-none outline-none focus:border-none focus:ring-0 focus:outline-none"
                      {...register("message", {
                        required: "Message is required",
                      })}
                    />
                  </div>
                  {errors.message && (
                    <p className="text-red-600 md:text-sm mt-1 text-xs">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <Button
                  className="w-full rounded-2xl px-6 py-3 font-semibold md:text-base  text-sm bg-blue-500 hover:bg-blue-700 text-white"
                  onClick={handleSubmit(sendEmail)}
                >
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
