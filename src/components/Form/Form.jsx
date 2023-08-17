import * as React from "react";
import PropTypes from "prop-types";
import { StyledForm, Notification } from "./Form.styles";
export const Form = ({
	handleChange,
	handleSubmit,
	formData,
	isLoading,
	isError,
	user,
}) => {
	return (
		<StyledForm onSubmit={handleSubmit}>
			{user && !isLoading ? (
				<Notification>
					Submitted a new user named {user.firstName} succesfully.
				</Notification>
			) : null}
			<div>
				<label htmlFor="firstName">First name:</label>
				<input
					type="text"
					id="firstName"
					name="firstName"
					value={formData.firstName}
					onChange={handleChange}
				/>
			</div>
			<div>
				<label htmlFor="lastName">Last name:</label>
				<input
					type="text"
					id="lastName"
					name="lastName"
					value={formData.lastName}
					onChange={handleChange}
				/>
			</div>
			<button type="submit" disabled={isLoading}>
				{isLoading ? "Submitting ..." : "Submit"}
			</button>
		</StyledForm>
	);
};

Form.propTypes = {
	handleChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	isLoading: PropTypes.bool,
	isError: PropTypes.bool,
	formData: PropTypes.shape({
		firstName: PropTypes.string,
		lastName: PropTypes.string,
	}),
	user: PropTypes.shape({
		firstName: PropTypes.string,
		lastName: PropTypes.string,
	}),
};
