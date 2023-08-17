import { useRouteError } from "react-router-dom";
import { ErrorContainer } from "./Error.styles";
export default function ErrorPage() {
	const error = useRouteError();

	return (
		<ErrorContainer>
			<div>
				<h1>Oops!</h1>
				<p>Sorry, an unexpected error has occured.</p>
				<p>
					<i>
						{error.status}: {error.statusText || error.message}
					</i>
				</p>
			</div>
		</ErrorContainer>
	);
}
