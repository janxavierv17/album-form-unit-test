import styled from "styled-components";

export const MasterLayout = styled.div`
	padding: 2rem;
`;

export const Header = styled.h1`
	font-family: "Dancing Script", cursive;
	font-size: 64px;
	margin: 0px;
`;

export const SubHeader = styled.h2`
	font-size: 24px;
`;

export const Container = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 10px;

	li {
		list-style-type: none;
		flex-basis: 350px;
		position: relative;
		cursor: pointer;

		img {
			object-fit: cover;
			max-width: 100%;
			height: auto;
			vertical-align: middle;
			border-radius: 5px;
		}

		div {
			position: absolute;
			width: 100%;
			height: 100%;
			background: rgba(57, 57, 57, 0.502);
			top: 0;
			left: 0;
			transform: scale(0);
			transition: all 0.2s 0.1s ease-in-out;
			color: #fff;
			border-radius: 5px;
			display: flex;
			align-items: center;
			justify-content: center;

			span {
				text-align: center;
			}
		}

		&:hover div {
			transform: scale(1);
		}
	}
`;
