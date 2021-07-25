import { observable, action } from "mobx";

const mobxStore = observable({
  count: 0,
  decrement: action(function () {
    mobxStore.count -= 1;
  }),
  increment: action(function () {
    mobxStore.count += 1;
  }),
});

export default mobxStore;
