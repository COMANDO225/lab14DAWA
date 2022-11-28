import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "react-hot-toast";
import UserProvider from "./contexts/UserProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<UserProvider>
			<NextUIProvider>
				<Toaster />
				<App />
			</NextUIProvider>
		</UserProvider>
	</React.StrictMode>
);
