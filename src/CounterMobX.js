import { observer } from "mobx-react";
import React, { PureComponent } from "react";
import mobxStore from "./mobxStore";

class CounterMobX extends PureComponent {
  render() {
    return (
      <div>
        <h1>{mobxStore.count}</h1>
        <button onClick={mobxStore.increment}>increment</button>
        <button onClick={mobxStore.decrement}>decrease</button>
      </div>
    );
  }
}

export default observer(CounterMobX);
