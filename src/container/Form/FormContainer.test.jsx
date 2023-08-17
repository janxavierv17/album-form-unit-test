import * as React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { postUser } from "../../redux/actions/usersActions";
import { FormContainer } from "./FormContainer";
import { postUserApi } from "../../redux/saga/postUser";

const mockStore = configureStore([]);
const initialState = {
	user: {
		loading: false,
		error: false,
	},
};

jest.mock("../../redux/saga/postUser", () => ({
	postUserApi: jest.fn(),
	postUserSuccess: jest.fn(),
}));
describe("FormContainer Component", () => {
	const formData = {
		firstName: "John",
		lastName: "Doe",
	};

	it("handles form submission and successful user post", async () => {
		const store = mockStore(initialState);

		postUserApi.mockResolvedValue({
			data: {
				firstName: "John",
				lastName: "Doe",
			},
		});

		const { getByLabelText, getByText } = render(
			<Provider store={store}>
				<FormContainer />
			</Provider>
		);

		const firstNameInput = getByLabelText("First name:");
		const lastNameInput = getByLabelText("Last name:");
		const submitButton = getByText("Submit");

		// Fill out form fields
		fireEvent.change(firstNameInput, {
			target: { value: formData.firstName },
		});
		fireEvent.change(lastNameInput, {
			target: { value: formData.lastName },
		});

		// Click the submit button
		fireEvent.click(submitButton);

		// Wait for the saga to complete and actions to be dispatched
		await waitFor(() => {
			expect(store.getActions()).toEqual([postUser(formData)]);
		});
	});
});
