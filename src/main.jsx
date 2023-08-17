import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store/store.js";
import { GlobalStyle } from "./Main.styles.jsx";
import { RouterProvider } from "react-router-dom";
import { Routes } from "./Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<GlobalStyle />
			<RouterProvider router={Routes} />
		</Provider>
	</React.StrictMode>
);
