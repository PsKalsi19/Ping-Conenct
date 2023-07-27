import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
// context imports
import AuthProvider from "./context/AuthProvider";
import PostProvider from "./context/PostProvider";
import UserProvider from "./context/UserProvider";
import { store } from "./store/appStore";

// Call make Server
makeServer();
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AuthProvider>
          <UserProvider>
            <PostProvider>
              <Toaster position="top-right" reverseOrder={false} />
              <App />
            </PostProvider>
          </UserProvider>
        </AuthProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
