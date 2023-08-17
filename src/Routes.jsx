import { createBrowserRouter } from "react-router-dom";
import { PhotoAlbum } from "./layouts/PhotoAlbum/PhotoAlbum";
import { FormLayout } from "./layouts/Form/Form";
import ErrorPage from "./components/Error/ErrorPage";
import App from "./App";

/**
 * Task 1 is accessible through: http://localhost:5173/albums
 * Task 2 is accessible through: http://localhost:5173/form
 * Task 3 can be found on FormContainer.test.jsx & postUser.test.js
 * The test can be ran by running the command "npm run test"
 */
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
