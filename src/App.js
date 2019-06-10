import React from "react";
import Jumbotron from "./components/Jumbotron";
import GameContainer from "./components/MainGameContainer";
import "./App.css";

const App = () => (
  <div className="container-fluid mainContainer">
    <Jumbotron />
    <GameContainer /> 
  </div>
);

export default App;
