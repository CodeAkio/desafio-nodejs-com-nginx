const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
};

const conn = mysql.createConnection(config);

app.get('/', indexHandler);
createTablePeople(conn);

app.listen(port, () => {
  console.log(`Running server at port ${port}`);
});

function createTablePeople(conn) {
  const createTableQuery = 'CREATE TABLE IF NOT EXISTS `people` (`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY, `name` VARCHAR(255) NOT NULL);';
  conn.query(createTableQuery);
}

function indexHandler(req, res) {
  const insertUserQuery = `INSERT INTO people(name) VALUES('John Doo');`;
  conn.query(insertUserQuery);

  let htmlResponse = '<h1>Full Cycle</h1>';

  const getAllUsersQuery = `SELECT id, name FROM people`;

  conn.query(getAllUsersQuery, (error, people, _fields) => {
    if (error) {
      console.log('Error on get users from DB!');
      throw error;
    }

    htmlResponse += '<ul>';

    for (const person of people) {
      table += `<li>#${person.id} - ${person.name}</li>`;
    }

    htmlResponse += '</ul>';
  });

  res.send(htmlResponse);
}
