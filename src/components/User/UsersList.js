import React from "react";
import classes from "./UsersList.module.css";
import Card from "../UI/Card";

const UsersList = (props) => {
  console.log(props.userRecords);

  return (
    <Card className={classes.users}>
      <ul>
        {props.userRecords.map((userRecord) => (
          <li key={userRecord.id}>
            {userRecord.userName} ({userRecord.userAge} Years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
