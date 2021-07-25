import React from "react";
import "./App.css";
import CounterMobX from "./CounterMobX";
import CounterRedux from "./CounterRedux";

function App() {
  return (
    <div className="App">
      <CounterRedux />
      <CounterMobX />
    </div>
  );
}

export default App;
