import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fibonacci from "./Fibonacci";
import FibonacciResult from "./FibonacciResult";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Fibonacci />} />
        <Route path="/result" element={<FibonacciResult />} />
      </Routes>
    </Router>
  );
}

export default App;
