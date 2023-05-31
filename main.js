import { createConnection } from './node_modules/mysql2';
import dotenv from './node_modules/dotenv';

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
  );