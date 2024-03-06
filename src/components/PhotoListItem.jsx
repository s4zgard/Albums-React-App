import { GoTrashcan, GoX } from "react-icons/go";
import { useRemovePhotoMutation } from "../store";
const PhotoListItem = ({ photo }) => {
  const [removePhoto, results] = useRemovePhotoMutation();

  const handleRemovePhoto = () => {
    removePhoto(photo);
  };
  return (
    <div className="relative cursor-pointer">
      <img src={photo.url} className="w-20 h-20 " alt="photo" />
      <div
        className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80"
        onClick={handleRemovePhoto}
      >
        <GoTrashcan className="text-3xl text-red-500" />
      </div>
    </div>
  );
};

export default PhotoListItem;
