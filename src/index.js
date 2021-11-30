import React from "react";
import ReactDOM from "react-dom";
import { PleaseSignBox } from "./components/PleaseSignBox";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <PleaseSignBox />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
