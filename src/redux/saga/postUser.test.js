import { expectSaga } from "redux-saga-test-plan";
import { postUserSaga } from "./postUser";
import { postUserSuccess } from "../actions/usersActions";
import { call } from "redux-saga/effects";
import axios from "axios";

describe("postUserSaga", () => {
	it("should handle a successful API call", () => {
		const mockUser = { firstName: "Test user", lastName: "expected user" };

		const expectedResponse = {
			firstName: "Test user",
			lastName: "expected user",
			id: 101,
		};
		return expectSaga(postUserSaga, { payload: mockUser }) // Start the saga with mock action
			.provide([
				[
					call(
						axios.post,
						"https://jsonplaceholder.typicode.com/posts",
						mockUser
					),
				],
			]) // Provide mock API response
			.put(postUserSuccess(expectedResponse)) // Expect a successful action
			.run({ timeout: 1000 });
	});
});
