import { usePhotoData } from "../../hooks/usePhotoData";
import { Photo } from "../../components/Photo/Photo";

export const PhotoAlbumContainer = () => {
	const { photos, isLoading, isError } = usePhotoData();
	const displayPhotos = photos.map((photo) => {
		return <Photo key={photo.id} photo={photo} />;
	});

	if (isLoading) return <p>Loading ...</p>;
	if (isError) return <p>Something went wrong, Error: {isError.message}</p>;
	return displayPhotos;
};
