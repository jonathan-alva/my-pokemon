var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pokemon"
});

con.connect(function (err) {
  if (err) throw err;
  var sql = "";
  console.log("Connected!");

  sql = "DROP TABLE IF EXISTS MY_POKEMON";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table Dropped");
  });

  sql = "CREATE TABLE MY_POKEMON (id int AUTO_INCREMENT PRIMARY KEY, pokemon_id int NOT NULL, nickname VARCHAR(255) NOT NULL )"
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });

  sql = "INSERT INTO MY_POKEMON (pokemon_id, nickname) values ('1', 'Bubasur 1');";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Record Created");
  });
  sql = "INSERT INTO MY_POKEMON (pokemon_id, nickname) values ('1', 'Bubasur 2');";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Record Created");
  });
  sql = "INSERT INTO MY_POKEMON (pokemon_id, nickname) values ('1', 'Bubasur 3');";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Record Created");
  });
  sql = "INSERT INTO MY_POKEMON (pokemon_id, nickname) values ('1', 'Bubasur 4');";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Record Created");
  });
  sql = "INSERT INTO MY_POKEMON (pokemon_id, nickname) values ('1', 'Bubasur 5');";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Record Created");
  });

  con.end(function (err) {
    if (err) throw err;
    console.log('Done, End Connection')
  })
});