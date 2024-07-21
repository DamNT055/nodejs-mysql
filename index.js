import { createConnection } from "mysql";
const connection = createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "122334",
  database: "td_db",
});

connection.connect(function (error) {
  if (error) {
    console.error("error connecting: " + error);
    return;
  }
  console.log("Connected as Id: " + connection.threadId);
});
connection.query(
  "SELECT e.* FROM employees e",
  function (error, result, field) {
    if (error) throw error;
    console.log(result);
  }
);
connection.end();
