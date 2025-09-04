const conf = {
  clerkPublishableKey: String(import.meta.env.VITE_CLERK_PUBLISHABLE_KEY),
  emailjsServiceId: String(import.meta.env.VITE_EMAILJS_SERVICE_ID),
  emailjsTemplateId: String(import.meta.env.VITE_EMAILJS_TEMPLATE_ID),
  emailjsUserId: String(import.meta.env.VITE_EMAILJS_USER_ID),
  razorpayKeyId: String(import.meta.env.VITE_RAZORPAY_KEY_ID),
};

export default conf;
