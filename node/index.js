const express = requite('express');
// const mysql = requite('mysql');

const app = express();
const port = 3000;

// const config = {
//   host: 'db',
//   user: 'root',
//   password: 'root',
//   database: 'nodedb',
// };

const conn = mysql.createConnection(config);

// app.get('/', indexHandler);
// createDatabase(conn);

app.listen(port, () => {
  console.log(`Running server at port ${port}`);
});

// function createDatabase(conn) {
//   const createTableQuery = 'USE `nodedb`; CREATE TABLE IF NOT EXISTS `people` (`id` INT AUTO_INCREMENT PRIMARY KEY, `name` VARCHAR (255) NOT NULL';
//   conn.query(createTableQuery);
// }

function indexHandler(req, res) {
  // const insertUserQuery = `INSERT INTO people(name) VALUES('John Doo');`;
  // conn.query(insertUserQuery);

  let htmlResponse = '<h1>Full Cycle</h1>';

  // const getAllUsersQuery = `SELECT id, name FROM people`;

  // conn.query(getAllUsersQuery, (error, people, _fields) => {
  //   if (error) {
  //     conn.end();
  //     console.log('Error on get users from DB!');
  //     throw error;
  //   }

  //   htmlResponse += '<ul>';

  //   for (const person of people) {
  //     table += `<li>#${person.id} - ${person.name}</li>`;
  //   }

  //   htmlResponse += '</ul>';
  // });

  res.send(htmlResponse);
}
