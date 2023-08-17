import {
	NavBarContainer,
	NavLogo,
	NavMenu,
	NavMenuItem,
} from "./NavigationBar.styles";
import { Link } from "react-router-dom";
export const NavigationBar = () => {
	return (
		<NavBarContainer>
			<NavLogo>Jan Virgen</NavLogo>
			<NavMenu>
				<NavMenuItem>
					<Link to={`albums`}>Task 1: Albums</Link>
				</NavMenuItem>
				<NavMenuItem>
					<Link to={`form`}>Task 2: Form</Link>
				</NavMenuItem>
			</NavMenu>
		</NavBarContainer>
	);
};
