import React from "react";
import ReactDOM from "react-dom";
import {map} from 'ramda';

import "./styles.css";

const fruits = ['apple','banana','grape']

function App() {
  return <ul>{map(v=><li>{v}</li>,fruits)}</ul>
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
