import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet";
import { Text, Button, Input, Heading, TextArea, Img } from "../../components";
import conf from "conf/conf";

export default function Contact() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
          setErrorMessage("Failed to send message. Please try again later.");
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
      <div className="flex min-h-screen w-full items-center justify-center bg-white-a700 bg-[url(/images/img_signin.png)] bg-cover bg-no-repeat py-8 sm:py-4">
        <div className="container-xs flex justify-center px-5 sm:px-4">
          <div className="w-full max-w-md rounded-2xl bg-white-a700 py-8 px-6 sm:py-6 sm:px-4">
            <Heading
              as="h1"
              className="text-3xl font-medium mb-6 text-center sm:text-3xl"
            >
              Contact Us
            </Heading>
            {successMessage && (
              <p className="text-green-600 mb-4 text-center text-base sm:text-sm">
                {successMessage}
              </p>
            )}
            {errorMessage && (
              <p className="text-red-600 mb-4 text-center text-base sm:text-sm">
                {errorMessage}
              </p>
            )}
            <div className="w-full">
              <div className="flex flex-col gap-6 sm:gap-4">
                <div className="flex flex-col gap-1.5">
                  <div className="flex px-4">
                    <Text
                      size="texts"
                      as="p"
                      className="text-lg font-sans text-black-900 sm:text-base"
                    >
                      Full Name :
                    </Text>
                  </div>
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    className="gap-1.5 rounded-2xl px-3.5 py-2 text-base text-black-900 border border-gray-300 focus:border-lime-900 sm:text-sm"
                    {...register("name", { required: "Full name is required" })}
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm mt-1 sm:text-xs">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex px-4">
                    <Text
                      size="texts"
                      as="p"
                      className="text-lg font-sans text-black-900 sm:text-base"
                    >
                      Email :
                    </Text>
                  </div>
                  <Input
                    type="email"
                    shape="round"
                    placeholder="Enter your email"
                    className="gap-1.5 rounded-2xl px-3.5 py-2 text-base text-black-900 border border-gray-300 focus:border-lime-900 sm:text-sm"
                    prefix={
                      <Img
                        src="images/img_checkmark_gray_500.svg"
                        alt="email logo"
                        className="h-5 w-6 object-contain mr-2 sm:h-4 sm:w-5"
                      />
                    }
                    {...register("email", {
                      required: "Email is required",
                      validate: {
                        matchPatern: (value) =>
                          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                            value
                          ) || "Email address must be a valid address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1 sm:text-xs">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex px-4">
                    <Text
                      size="texts"
                      as="p"
                      className="text-lg font-sans text-black-900 sm:text-base"
                    >
                      Message :
                    </Text>
                  </div>
                  <TextArea
                    shape="round"
                    placeholder="Enter your message"
                    className="gap-1.5 rounded-2xl px-3.5 py-2 text-base text-black-900 border border-gray-300 focus:border-lime-900 sm:text-sm"
                    {...register("message", {
                      required: "Message is required",
                    })}
                  />
                  {errors.message && (
                    <p className="text-red-600 text-sm mt-1 sm:text-xs">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <Button
                  size="5xl"
                  variant="fill"
                  shape="round"
                  className="w-full rounded-2xl px-6 py-3 font-semibold text-base bg-lime-900 text-white-a700 hover:bg-lime-800 active:bg-green-500 sm:text-sm"
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
