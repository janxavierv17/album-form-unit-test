import { useState } from "react";
import { useDispatch } from "react-redux";
import { postUser } from "../../redux/actions/usersActions";
import { Form } from "../../components/Form/Form";
import { useFormData } from "../../hooks/useFormData";
export const FormContainer = () => {
	const { isLoading, isError } = useFormData();
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(postUser(formData));

		setFormData({
			firstName: "",
			lastName: "",
		});
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	return (
		<Form
			handleChange={handleChange}
			handleSubmit={handleSubmit}
			formData={formData}
			isLoading={isLoading}
			isError={isError}
		/>
	);
};
