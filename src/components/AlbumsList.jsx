import {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} from "../store";
import Skeleton from "./Skeleton";
import ExpandableList from "./ExpandableList";
import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
import AlbumsListItem from "./AlbumListItem";

const AlbumsList = ({ user }) => {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user);
  };
  let content;
  if (isFetching) {
    content = <Skeleton times={3} className="h-5 w-full" />;
  } else if (error) {
    content = <div className="text-red-500">Error Fetching Albums</div>;
  } else {
    content = data.map((album) => {
      return <AlbumsListItem key={album.id} album={album} />;
    });
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-2">
        Albums of {user.name}
        <Button onClick={handleAddAlbum} loading={results.isFetching}>
          + Add Album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
};

export default AlbumsList;
