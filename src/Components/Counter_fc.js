import React from "react";

function CounterFunction() {
  const [counter, UpdateState] = React.useState(0);

  const handleIncrement = (inc) => {
    UpdateState(counter + inc);
  };

  return (
    <div className="container">
      <h2>Counter App in Function</h2>
      <p>Counter : {counter}</p>
      <button className="btn btn-primary" onClick={() => handleIncrement(2)}>
        Increment
      </button>
      <button className="btn btn-danger" onClick={() => handleIncrement(-2)}>
        Decrement
      </button>
    </div>
  );
}

export default CounterFunction;
