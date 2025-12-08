import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import WhatsAppButtonPage from "./pages/WhatsAppButtonPage";
import FloatingEmailPage from "./pages/FloatingEmailPage";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <WhatsAppButtonPage />
    <FloatingEmailPage />
  </React.StrictMode>
);
