import styled from "styled-components";
export const Notification = styled.p`
	color: green;
`;
export const StyledForm = styled.form`
	width: 300px;
	margin: 0 auto;
	padding: 20px;
	border: 1px solid #ccc;
	border-radius: 5px;
	border-left-width: 20px;
	padding-right: 40px;

	div {
		margin-bottom: 10px;
		label {
			display: block;
			margin-bottom: 5px;
			font-weight: bold;
		}
		input {
			width: 100%;
			padding: 8px;
			border: 1px solid #ccc;
			border-radius: 5px;
		}
	}

	button {
		display: block;
		padding: 10px;
		background-color: #007bff;
		color: white;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		transition: background-color 0.3s ease-in-out;

		&:hover {
			background-color: #0056b3;
		}

		&:disabled {
			background-color: #ccc;
			cursor: not-allowed;
		}
	}
`;
