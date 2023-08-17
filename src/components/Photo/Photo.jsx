import PropTypes from "prop-types";

export const Photo = ({ photo }) => {
	const { id, title, url } = photo;
	return (
		<li key={id}>
			<img src={url} alt={title} />
			<div>
				<span>{title}</span>
			</div>
		</li>
	);
};

Photo.propTypes = {
	photo: PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
	}),
};
