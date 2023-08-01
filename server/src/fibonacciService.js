const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database(":memory:", (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connected to the SQlite database.");
});

db.serialize(() => {
  db.run(`CREATE TABLE fibonacci (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            number INTEGER UNIQUE,
            value INTEGER
          )`);
});

async function getFibonacci(number, res) {
  const fib = [0, 1];
  for (let i = 2; i < number; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    db.run(
      "INSERT OR IGNORE INTO fibonacci(number, value) VALUES(?, ?)",
      [i, fib[i]],
      (err) => {
        if (err) {
          console.error(err.message);
        }
      }
    );
  }
  res.send(fib.slice(0, number));
}

module.exports = { getFibonacci };
