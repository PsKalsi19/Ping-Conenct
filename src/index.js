import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// context imports
import AuthProvider from "./context/AuthProvider";
import UserProvider from "./context/UserProvider";

// Call make Server
makeServer();
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>
          <Toaster position="top-right" reverseOrder={false} />
          <App />
        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
