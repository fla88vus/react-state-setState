import React, { useState, Fragment } from "react";

const Users = () => {
  const [user, setUser] = useState(["Pluto", "Pippo"]);
  console.log(user);
  const addUser = () => {
    setUser([...user, "Paperino"]);
  };
  return (
    <>
      <div>
        {user.map(u => {
          return (
            <ul>
              <li>{u}</li>
            </ul>
          );
        })}
      </div>
      <button onClick={addUser}>Aggiungi</button>
    </>
  );
};

export default Users;
