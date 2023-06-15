import React from "react";
import {createRoot} from "react-dom/client"
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
// context imports
import AuthProvider from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";


// Call make Server
makeServer();
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <Toaster position="top-right" reverseOrder={false} />
      <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);