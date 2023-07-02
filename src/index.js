import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import CustomDialog from "./components/dialog/CustomDialog";
import EditProfile from "./components/edit-profile-form/EditProfile";
// context imports
import AuthProvider from "./context/AuthProvider";
import PostProvider from "./context/PostProvider";
import UserProvider from "./context/UserProvider";

// Call make Server
makeServer();
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>
          <PostProvider>
            <Toaster position="top-right" reverseOrder={false} />
            <CustomDialog />
            <EditProfile />
            <App />
          </PostProvider>
        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
