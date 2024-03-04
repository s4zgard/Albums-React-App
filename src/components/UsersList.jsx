import { fetchUsers } from "../store";
import { createUser } from "../store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import UserListItem from "./UserListItem";
import useThunk from "../hooks/use-thunk";
import Skeleton from "./Skeleton";
import Button from "./Button";

const UsersList = () => {
  const [getUsers, isLoadingUsers, usersError] = useThunk(fetchUsers);
  const [saveUser, creatingUser] = useThunk(createUser);
  const { data } = useSelector((state) => state.users);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const addUser = () => {
    saveUser();
  };

  let content;

  if (isLoadingUsers) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else if (usersError) {
    content = "Error fetching data";
  } else {
    content = data.map((user) => <UserListItem key={user.id} user={user} />);
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>

        <Button loading={creatingUser} onClick={addUser}>
          + Add User
        </Button>
      </div>

      {content}
    </div>
  );
};

export default UsersList;
