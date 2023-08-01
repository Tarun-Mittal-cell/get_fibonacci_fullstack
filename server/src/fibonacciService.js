const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database(":memory:", (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connected to SQlite database.");
});

db.serialize(() => {
  db.run(`CREATE TABLE fibonacci (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            number INTEGER UNIQUE,
            value INTEGER
          )`);
});

async function getFibonacci(number, res) {
  let fib = [];
  for (let i = 0; i < number; i++) {
    fib[i] = await getFibonacciValue(i);
  }
  res.send(fib);
}

function getFibonacciValue(n) {
  return new Promise((resolve) => {
    db.get(
      "SELECT value FROM fibonacci WHERE number = ?",
      n,
      function (err, row) {
        if (row) {
          resolve(row.value);
        } else {
          let fibValue =
            n < 2 ? n : getFibonacciValue(n - 1) + getFibonacciValue(n - 2);
          db.run("INSERT INTO fibonacci(number, value) VALUES(?, ?)", [
            n,
            fibValue,
          ]);
          resolve(fibValue);
        }
      }
    );
  });
}

module.exports = { getFibonacci };
