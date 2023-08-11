import React, { useState } from "react";

import AddUser from "./components/User/AddUser";
import UsersList from "./components/User/UsersList";

function App() {
  const [userDetails, setUserDetails] = useState([]);

  const addusers = (username, userage) => {
    // console.log(...userInputs);

    // setUserDetails((prevUserDetails) => [
    //   userInputs["userName"],
    //   userInputs["age"],
    //   ...prevUserDetails,
    // ]);

    setUserDetails((prevUserDetails) => [
      ...prevUserDetails,
      { userName: username, userAge: userage, id: Math.random().toString() },
    ]);
  };
  return (
    <div>
      <AddUser onAddUser={addusers} />
      <UsersList userRecords={userDetails} />
    </div>
  );
}

export default App;
