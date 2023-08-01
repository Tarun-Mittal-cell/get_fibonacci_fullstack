import React from "react";

function FibonacciResult() {
  const fibonacci = JSON.parse(localStorage.getItem("fibonacci"));
  return (
    <div>
      <h2>Fibonacci Series</h2>
      {fibonacci && fibonacci.join(", ")}
    </div>
  );
}

export default FibonacciResult;
