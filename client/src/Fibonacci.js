import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Fibonacci() {
  const [number, setNumber] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!Number.isInteger(Number(number)) || Number(number) <= 0) {
      alert("Please enter a positive integer");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3001/fibonacci", {
        number,
      });
      localStorage.setItem("fibonacci", JSON.stringify(response.data));
      navigate("/result");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group>
        <Form.Label>Enter a number</Form.Label>
        <Form.Control
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Fibonacci;
