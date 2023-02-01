import Card from "../UI/Card";
import classes from "./UsersList.module.css";
import UserContext from "./user-context";
import { useContext } from "react";

const UsersList = (props) => {
  const ctx = useContext(UserContext);
  return (
    <Card className={classes.users}>
      <ul>
        {ctx.users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} {user.age} Years old
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
