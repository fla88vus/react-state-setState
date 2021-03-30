import React, { useState, Fragment } from "react";

const Users = () => {
  const [user, setUser] = useState(["Pluto", "Pippo"]);
  console.log(user);
  const addUser = () => {
    setUser([...user, "Paperino"]);
  };

  const modifyUser = () => {
    const [Pluto, ...other] = user;
    console.log("other", other);
    setUser(["Minnie", ...other]);
  };

  
  return (
    <>
      <div>
        {user.map((u, index) => {
          return (
            <ul key={index}>
              <li>{u}</li>
            </ul>
          );
        })}
      </div>
      <button onClick={addUser}>Aggiungi</button>
      <br />
      <br />
      <button onClick={modifyUser}>Modifica Pluto</button>
    </>
  );
};

export default Users;
