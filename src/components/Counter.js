import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  increase,
  toggle,
} from "../features/counter/counterSlice";
const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const show = useSelector((state) => state.counter.show);
  const dispatch = useDispatch();
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(increase(10))}>Increase by 10</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <button onClick={() => dispatch(toggle())}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
