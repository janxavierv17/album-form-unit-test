import { useSelector } from "react-redux";

export const useFormData = () => {
	const user = useSelector((state) => state.user.user);
	const isLoading = useSelector((state) => state.user.loading);
	const isError = useSelector((state) => state.user.isError);

	return { user, isLoading, isError };
};
