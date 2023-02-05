import './App.css';
import React, { useState } from "react";
import axios from 'axios';
import Welcome from './Welcome'
import {useNavigate, Route, Routes} from 'react-router-dom'

const App = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit =  (event) => {

    event.preventDefault();
     axios.post('http://localhost:3000', {username, password})
    .then((response)=> {
      console.log(response);
      navigate('/welcome');
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
      <Routes>
        <Route path="/welcome" element={<Welcome {...props} username={username} />} />
        <Route path="/" element={<h1>Welcome to the Game</h1>} />
      </Routes>
      
    <form onSubmit={handleSubmit} action="/welcome">
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

