import { Outlet } from "react-router-dom";
import { NavigationBar } from "./components/Navigation/NavigationBar";
function App() {
	return (
		<div>
			<NavigationBar />
			<Outlet />
		</div>
	);
}

export default App;
