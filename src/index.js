import React from "react";
import ReactDOM from "react-dom";
import {addIndex, map} from 'ramda';

import "./styles.css";

const fruits = ['apple','banana','grape', 'lemon']
const fruitsMap = addIndex(map);

function App() {
  return <ul>{fruitsMap((v,i)=><li key={i}>{v}</li>,fruits)}</ul>
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
