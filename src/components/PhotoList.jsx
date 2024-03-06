import { useFetchPhotosQuery, useAddPhotoMutation } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ album }) => {
  const { data, error, isFetching } = useFetchPhotosQuery(album);
  const [addPhoto, results] = useAddPhotoMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  let content;
  if (isFetching) {
    content = (
      <div className="flex flex-row gap-2">
        <Skeleton times={3} className="h-10 w-10" />
      </div>
    );
  } else if (error) {
    content = <div>Error Fetching Photos</div>;
  } else {
    content = data.map((photo) => {
      return <PhotoListItem key={photo.id} photo={photo} />;
    });
  }
  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        Photos in {album.title}{" "}
        <Button onClick={handleAddPhoto} loading={results.isLoading}>
          + Add Photo
        </Button>
      </div>
      <div className="flex flex-row flex-wrap items-center gap-2 justify-center">
        {content}
      </div>
    </div>
  );
};

export default PhotoList;
