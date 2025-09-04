import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/tailwind.css";
import { ClerkProvider } from "@clerk/clerk-react";
import conf from "conf/conf.js";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <ClerkProvider publishableKey={conf.clerkPublishableKey}>
    <App />
  </ClerkProvider>
);
