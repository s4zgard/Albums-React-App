import { GoTrashcan } from "react-icons/go";
import { deleteUser } from "../store";
import useThunk from "../hooks/use-thunk";
import Button from "./Button";

const UserListItem = ({ user }) => {
  const [remove, isRemoving] = useThunk(deleteUser);

  const handleDelete = () => {
    remove(user.id);
  };
  return (
    <div key={user.id} className="mb-2 border rounded ">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <div className="flex flex-rows items-center justify-between gap-x-2">
          <Button loading={isRemoving} onClick={handleDelete}>
            <GoTrashcan className="text-red-500" />
          </Button>
          {user.name}
        </div>
      </div>
    </div>
  );
};

export default UserListItem;
