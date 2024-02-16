import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { GuestsProvider } from "./context/GuestsContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Builder from "./pages/Builder.jsx";
import Detail from "./pages/Detail.jsx";
import Error from "./pages/Error.jsx";
import "./index.css";
import LoginPage from "./pages/LoginPage.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "", element: <Home /> },
			{ path: "builder", element: <Builder /> },
			{ path: "login", element: <LoginPage /> },
			{ path: "detail/:id", element: <Detail /> },
			{ path: "*", element: <Error /> },
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<UserProvider>
		<GuestsProvider>
			<RouterProvider router={router}>
				<App />
			</RouterProvider>
		</GuestsProvider>
	</UserProvider>
);
