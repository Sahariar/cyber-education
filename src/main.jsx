import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AuthProvider, { AuthContext } from "./context/AuthProvider";
import DataProvider from "./context/DataProvider";
import "./index.css";
import { route } from "./Routes/Route";

/*Initialize under useEffect */

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<DataProvider>
			<AuthProvider>
				<RouterProvider router={route}></RouterProvider>
			</AuthProvider>
		</DataProvider>
	</React.StrictMode>
);
