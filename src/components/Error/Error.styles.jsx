import styled from "styled-components";

export const ErrorContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	text-align: center;
	padding: 2rem;
	border-radius: 5px;

	h1 {
		font-size: 2rem;
		margin-bottom: 1rem;
	}

	p {
		font-size: 1.2rem;
		margin-bottom: 0.5rem;
	}

	i {
		font-style: italic;
		font-weight: bold;
		color: #ff6b6b;
	}
`;
