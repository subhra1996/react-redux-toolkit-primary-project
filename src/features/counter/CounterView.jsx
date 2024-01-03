import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./counterSlice";

const CounterView = () => {
  const count = useSelector((state)=>state.counter.count);

  const dispatch = useDispatch();

  const  handleIncrement= ()=>{
    dispatch(increment());
  };

  const handleDecrement = ()=>{
    dispatch(decrement());
  };

  const handleReset = () =>{
    dispatch(reset());
  };
  return (
    <div>
      <h1>Counter View</h1>
      <p>{count}</p>
      <button onClick={handleIncrement}>
        Increment
      </button>
      <button onClick={handleDecrement}>
        Decrement
      </button>
      <button onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default CounterView;
