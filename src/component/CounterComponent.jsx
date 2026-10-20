import React from "react";
import { decrement, increment } from "../reducers/counterReducer";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card } from "flowbite-react";

const CounterComponent = () => {
  let count = useSelector((state) => state.counter.value);
  let dispatch = useDispatch();
  return (
    <>
      <div className="min-w-screen min-h-screen bg-blue-700 flex flex-col gap-8 items-center justify-center">
        <h1 className="text-3xl font-bold text-white">Counter</h1>
        <Card className="w-80">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            {count}
          </h1>
          <Button onClick={() => dispatch(increment())}>Increment</Button>
          <Button onClick={() => dispatch(decrement())}>Decrement</Button>
        </Card>
      </div>
    </>
  );
};

export default CounterComponent;
