import { PhotoAlbumContainer } from "../../container/PhotoAlbum/PhotoAlbumContainer";
import {
	Container,
	SubHeader,
	Header,
	MasterLayout,
} from "./PhotoAlbum.styles";
export const PhotoAlbum = () => {
	return (
		<MasterLayout>
			<Header>Photo Album</Header>
			<SubHeader>
				Discover a captivating kaleidoscope of square-hued memories in
				our vibrant and enchanting photo album.
			</SubHeader>
			<Container>
				<PhotoAlbumContainer />
			</Container>
		</MasterLayout>
	);
};
