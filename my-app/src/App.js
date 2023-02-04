import './App.css';
import React, { useState } from "react";
import axios from 'axios';

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit =  (event) => {

    event.preventDefault();
     axios.post('http://localhost:3000', {username, password})
    .then((response)=> {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  };
      

  const handleUserNameChange = (event) => {
    setUsername(event.target.value)
    console.log(username)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  return (
    
    <div className="App">
      <h1>Welcome to Game!!!</h1>
    <form onSubmit={handleSubmit}>
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

