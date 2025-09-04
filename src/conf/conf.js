const conf = {
  clerkPublishableKey: import.meta.env.VITE_CLERK_PUBLISHABLE_KEY,
  emailjsServiceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  emailjsTemplateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  emailjsUserId: import.meta.env.VITE_EMAILJS_USER_ID,
  razorpayKeyId: import.meta.env.VITE_RAZORPAY_KEY_ID,
};

export default conf;
