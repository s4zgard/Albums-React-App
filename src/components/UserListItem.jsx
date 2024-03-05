import { GoTrashcan } from "react-icons/go";
import { deleteUser } from "../store";
import useThunk from "../hooks/use-thunk";
import Button from "./Button";
import ExpandableList from "./ExpandableList";
import AlbumsList from "./AlbumsList";

const UserListItem = ({ user }) => {
  const [remove, isRemoving, removeError] = useThunk(deleteUser);

  const handleDelete = () => {
    remove(user.id);
  };

  const header = (
    <>
      <Button loading={isRemoving} onClick={handleDelete}>
        {removeError || <GoTrashcan className="text-red-500" />}
      </Button>
      {user.name}
    </>
  );
  return (
    <ExpandableList header={header}>
      <AlbumsList user={user} />
    </ExpandableList>
  );
};

export default UserListItem;
