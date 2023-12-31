const express = require("express");
const router = express.Router();
const { getFibonacci } = require("./fibonacciService");

router.post("/", (req, res) => {
  const { number } = req.body;
  getFibonacci(number, res);
});

module.exports = router;
