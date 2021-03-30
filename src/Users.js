import React, { useState, Fragment, useEffect } from "react";

import { v4 } from "uuid";

const Users = () => {
  const [user, setUser] = useState([
    { id: v4(), name: "Pluto" },
    { id: v4(), name: "Pippo" }
  ]);

  const [objs, setObjs] = useState({
    p: {
      id: v4(),
      name: "pippo",
      address: []
    },
    q: {
      id: v4(),
      name: "pluto"
    }
  });

  const [newO, setNewO] = useState({ id: v4(), name: "ciao" });

  const editObjSpread = () => {
    // Removing
    const { name, ...rest } = newO;
    console.log(rest);
    // setNewO(rest);

    // Update
    const updateObj = { ...rest, name: "pippo" };
    console.log(updateObj);
    setNewO(updateObj);
  };
  // editObjSpread();

  const editObjState = () => {
    const test = Object.keys(objs).map(prop => {
      return objs[prop];
    });
    console.log(test);
  };
  editObjState();

  const addUser = () => {
    setUser([...user, { id: v4(), name: "Paperino" }]);
  };

  const modifyUser = id => {
    const userPluto = user.reduce((acc, u) => {
      if (u.id === id) {
        return [...acc, { id, name: "Minnie" }];
      } else {
        return [...acc, u];
      }
    }, []);

    setUser(userPluto);
  };

  const removeUser = id => {
    const userFiltered = user.filter(elem => {
      return elem.id !== id;
    });
    setUser(userFiltered);
  };

  const addSurnames = () => {
    const userMap = user.map(elem => {
      return {
        ...elem,
        surname: "surname-" + elem.name
      };
    });
    setUser(userMap);

    //setUser([...user, {}]);
  };

  return (
    <>
      <div>
        {user.map(u => {
          return (
            <ul key={u.id}>
              <li>
                {u.name} {u?.surname}
              </li>
            </ul>
          );
        })}

        <h3>Edit obj</h3>
        <div>{newO.name}</div>
        <button onClick={addUser}>Aggiungi</button>
        <br />
        <br />
        <button onClick={() => modifyUser(user[0].id)}>Modifica Pluto</button>
        <br />
        <br />
        <button onClick={() => removeUser(user[1].id)}>Elimina Pippo</button>
        <br />
        <br />
        <button onClick={addSurnames}>Aggiungi soprannomi</button>
        <br />
        <br />
        <button onClick={editObjSpread}>EditObjSpread</button>
      </div>
    </>
  );
};

export default Users;
