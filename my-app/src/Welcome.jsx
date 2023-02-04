import React from "react";
import './App.css'

export default function WelcomePage(props) {
    return (
      <>
        <h1>Welcome to the game, {props.username}</h1>
      </>
    );
  };

  