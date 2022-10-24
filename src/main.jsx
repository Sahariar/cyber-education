import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import  AuthProvider, { AuthContext } from "./context/AuthProvider";
import "./index.css";
import { route } from "./Routes/Route";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
    <AuthProvider>
			<RouterProvider router={route}></RouterProvider>
		</AuthProvider>
	</React.StrictMode>
);
