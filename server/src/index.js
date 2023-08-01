require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fibonacciRouter = require("./fibonacciController");
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use("/fibonacci", fibonacciRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
