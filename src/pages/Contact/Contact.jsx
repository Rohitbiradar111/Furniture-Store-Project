import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet";
import { Text, Button, Input, Heading, TextArea, Img } from "../../components";
import conf from "conf/conf";

export default function Contact() {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const sendEmail = (data) => {
        setSuccessMessage("");
        setErrorMessage("");

        emailjs.send(
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
                (error) => {
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
            <div className="flex h-[940px] w-full items-center justify-center bg-white-a700 bg-[url(/images/img_signin.png)] bg-cover bg-no-repeat md:h-auto md:py-5">
                <div className="container-xs flex justify-center md:px-5">
                    <div className="w-[50%] rounded-[24px] bg-white-a700 py-[38px] md:w-full sm:py-5 px-10">
                        <Heading as="h1" className="text-[48px] font-medium mb-6">
                            Contact Us
                        </Heading>
                        {successMessage && (
                            <p className="text-green-600 mb-4 text-center">{successMessage}</p>
                        )}
                        {errorMessage && (
                            <p className="text-red-600 mb-4 text-center">{errorMessage}</p>
                        )}
                        <div className="w-full self-stretch">
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-1.5">
                                    <div className="flex px-4">
                                        <Text size="texts" as="p" className="text-[18px] font-sans !text-black-900">
                                            Full Name :
                                        </Text>
                                    </div>
                                    <Input
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="gap-1.5 rounded-[24px] 
                                            px-3.5 text-[16px] !text-black-900"
                                        {
                                        ...register("name", { required: true })
                                        }
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <div className="flex px-4">
                                        <Text size="texts" as="p" className="text-[18px] font-sans !text-black-900">
                                            Email :
                                        </Text>
                                    </div>
                                    <Input
                                        type="email"
                                        shape="round"
                                        placeholder={`Enter your email`}
                                        className="gap-1.5 rounded-[24px] px-3.5 text-[16px] !text-black-900"
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
                                    {errors.email && (
                                        <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                                    )}
                                </div>
                                <div className="flex flex-col items-end gap-2.5">
                                    <div className="flex flex-col gap-1.5 self-stretch">
                                        <div className="flex px-4">
                                            <Text size="texts" as="p" className="text-[18px] font-sans !text-black-900">
                                                Message :
                                            </Text>
                                        </div>
                                        <TextArea
                                            shape="round"
                                            placeholder={`Enter your message`}
                                            className="gap-1.5 rounded-[24px] 
                                            px-3.5 text-[16px] !text-black-900"
                                            {
                                            ...register("message", { required: "Message is required" })
                                            }
                                        />
                                    </div>
                                </div>
                                <Button
                                    size="5xl"
                                    variant="fill"
                                    shape="round"
                                    className="self-stretch rounded-[24px] px-[34px] font-semibold sm:px-5 text-base active:bg-green-500"
                                    onClick={handleSubmit(sendEmail)}
                                >
                                    Send Message
                                </Button>
                            </div>
                        </div>
                    </div >
                </div>
            </div>
        </>
    );
}
