const express = require("express")
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(5500, () => {
  console.log(`example app listening on port 5500`)
})

app.get('../data', (req, res) => {
  const donnees = req.query;
  console.log(donnees);
  res.send("données reçues")
})

/*import { createConnection } from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

// what

var connection = createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT,

  });

  // simple query
connection.query(
    'SHOW DATABASES;',
    function(err, results, fields) {
        console.log(err)
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );*/