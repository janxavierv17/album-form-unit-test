import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const usePhotoData = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch({ type: "FETCH_PHOTOS" });
	}, [dispatch]);

	const photos = useSelector((state) => state.album.photos);
	const isLoading = useSelector((state) => state.album.loading);
	const isError = useSelector((state) => state.album.error);

	return { photos, isLoading, isError };
};
