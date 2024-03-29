import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import ExpandableList from "./ExpandableList";
import { useRemoveAlbumMutation } from "../store";
import PhotoList from "./PhotoList";

const AlbumsListItem = ({ album }) => {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemoveAlbum = (album) => {
    removeAlbum(album);
  };
  const header = (
    <>
      <Button
        onClick={() => handleRemoveAlbum(album)}
        loading={results.isLoading}
      >
        <GoTrashcan className="text-red-500" />
      </Button>
      <div>{album.title}</div>
    </>
  );
  return (
    <ExpandableList header={header}>
      <PhotoList album={album} />
    </ExpandableList>
  );
};

export default AlbumsListItem;
