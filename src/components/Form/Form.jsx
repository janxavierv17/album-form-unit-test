import PropTypes from "prop-types";
import { StyledForm } from "./Form.styles";
export const Form = ({ handleChange, handleSubmit, formData, isLoading }) => {
	return (
		<StyledForm onSubmit={handleSubmit}>
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
	formData: PropTypes.shape({
		firstName: PropTypes.string,
		lastName: PropTypes.string,
	}),
};
