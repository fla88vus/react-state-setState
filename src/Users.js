import React, { useState, Fragment, useEffect } from "react";

import { v4 } from "uuid";

const Users = () => {
  const [user, setUser] = useState([
    { id: v4(), name: "Pluto" },
    { id: v4(), name: "Pippo" }
  ]);

  const [objs, setObjs] = useState({
    p: {
      idx: v4(),
      name: "pippo"
    },
    q: {
      idx: v4(),
      name: "pluto"
    }
  });

  const [newO, setNewO] = useState({ id: v4(), name: "ciao" });

  const editObjSpread = () => {
    // Removing
    const { name, ...rest } = newO;
    // console.log(rest, 'rest');
    // setNewO(rest);

    // Update
    const updateObj = { ...rest, name: "pippo" };
    // console.log(updateObj, 'updateObj');
    // setNewO(updateObj);
  };
  // editObjSpread();

  const editObjState = objId => {
    const test = Object.keys(objs).map(prop => {
      return objs[prop];
    });

    const objModified = test.reduce((acc, u) => {
      if (u.idx === objId) {
        return { ...acc, p: { id: u.idx, name: "Minnie" } };
      } else {
        return { ...acc, u };
      }
    }, {});

    setObjs(objModified);
  };

  // editObjState();

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
        <h3>Nested obj</h3>
        <div>{objs.p.name}</div>
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
        {/*<button onClick={editObjSpread}>EditObjSpread</button>*/}
        <button onClick={() => editObjState(objs.p.idx)}>
          modifica oggetto
        </button>
      </div>
    </>
  );
};

export default Users;
