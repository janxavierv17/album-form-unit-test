import { createBrowserRouter } from "react-router-dom";
import { PhotoAlbum } from "./layouts/PhotoAlbum/PhotoAlbum";
import { FormLayout } from "./layouts/Form/Form";
import ErrorPage from "./components/Error/ErrorPage";
import App from "./App";

export const Routes = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "albums",
				element: <PhotoAlbum />,
			},
			{
				path: "form",
				element: <FormLayout />,
			},
		],
	},
]);
