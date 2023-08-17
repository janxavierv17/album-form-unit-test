import styled from "styled-components";

export const NavBarContainer = styled.nav`
	background-color: #333;
	color: white;
	display: flex;
	align-content: center;
	justify-content: space-between;
	padding: 1rem;
`;

export const NavLogo = styled.div`
	font-size: 1.5rem;
	font-weight: bold;
	align-items: center;
	display: flex;
`;

export const NavMenu = styled.ul`
	list-style: none;
	display: flex;
	gap: 1rem;
`;

export const NavMenuItem = styled.li`
	cursor: pointer;

	a {
		color: white;
		text-decoration: none;
		transition: color 0.2s;

		&:hover {
			color: #ff6b6b;
			text-decoration: underline;
		}
	}
`;
