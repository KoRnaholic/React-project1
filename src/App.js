import AddUser from "./components/AddUser";
import UsersList from "./components/UsersList";
import { useState } from "react";
import UserContext from "./components/user-context";

function App() {
  const [user, setUser] = useState([]);
  const [showList, setShowList] = useState(false);

  const addUserHandler = (Uname, Uage) => {
    setUser((prevUser) => {
      return [
        ...prevUser,
        { name: Uname, age: Uage, id: Math.random().toString() },
      ];
    });
    setShowList(true);
  };

  return (
    <UserContext.Provider value={{ users: user, onAddUser: addUserHandler }}>
      <AddUser />
      {showList && <UsersList />}
    </UserContext.Provider>
  );
}

export default App;
