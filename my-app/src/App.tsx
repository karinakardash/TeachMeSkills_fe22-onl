import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { H2 } from "./h2/H2";
import { Main } from "./main/Main";
import { Header } from "./header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;
