import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import AddUser from "./components/AddUser";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import User from "./components/User";

const App = () => {
  const [users, setUsers] = useState(false);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log("af", selector);
  }, [users]);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        // setUsers(data);
        dispatch({ type: "GET_DATA", payload: data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onAdd = async (name, email) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        dispatch({ type: "ADD_USER", payload: [...selector, data] });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onEdit = async (input, id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        input
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((res) => {
        console.log("in", input);
        setUsers(!users);
        dispatch({ type: "EDIT_USER", payload: input });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE"
    })
      .then((res) => {
        const temp = selector.filter((user) => {
          return user.id !== id;
        });
        dispatch({ type: "DELETE_USER", payload: temp });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <Navbar
        onAdd={onAdd}
        users={selector}
        onDelete={onDelete}
        onEdit={onEdit}
        data={selector}
      />
      <br />
    </div>
  );
};

export default App;
