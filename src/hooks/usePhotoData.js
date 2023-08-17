import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const usePhotoData = () => {
	const dispatch = useDispatch();
	const photos = useSelector((state) => state.album.photos);
	const isLoading = useSelector((state) => state.album.loading);
	const isError = useSelector((state) => state.album.error);

	useEffect(() => {
		if (!photos.length) dispatch({ type: "FETCH_PHOTOS" });
	}, [photos, dispatch]);

	return { photos, isLoading, isError };
};
