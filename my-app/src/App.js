import './App.css';
import React, { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const response = await fetch("/api/users", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ username, password }),
  //   });
  //   const result = await response.json();
  //   if (result.error) {
  //     console.error(result.error);
  //   } else {
  //     console.log("User added successfully");
  //   }
  // };

  const handleUserNameChange = (event) => {
    setUsername(event.target.value)
    console.log(username)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  return (
    //onSubmit={handleSubmit}
    <div className="App">
      <h1>Welcome to Game!!!</h1>
    <form >
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={handleUserNameChange}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button type="submit">Add User</button>
    </form>
    </div>
  );
};

export default App;

