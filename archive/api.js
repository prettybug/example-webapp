const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const app = express()
app.use(cors({
    origin: '*'
}))
const port = 3000

/*
const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'totoro',
    database: 'colorful_animals',
    multipleStatements: true
})
connection.connect()

connection.query("DROP TABLE IF EXISTS `animals`;")
connection.query("CREATE TABLE `animals` (id int PRIMARY KEY AUTO_INCREMENT,name varchar(255),color varchar(255));")
connection.query("INSERT INTO animals (name, color) VALUES ('Tiger', 'yellow');")
connection.query("INSERT INTO animals (name, color) VALUES ('Red Panda', 'red');")
connection.query("INSERT INTO animals (name, color) VALUES ('Parrot', 'red');")
connection.query("INSERT INTO animals (name, color) VALUES ('Whale', 'blue');")
connection.query("INSERT INTO animals (name, color) VALUES ('Frog', 'green');")
connection.query("INSERT INTO animals (name, color) VALUES ('Turtle', 'green');")
connection.query("INSERT INTO animals (name, color) VALUES ('Monkey', 'brown');")
connection.query("INSERT INTO animals (name, color) VALUES ('Polar Bear', 'white');")
connection.query("INSERT INTO animals (name, color) VALUES ('Giraffe', 'yellow');")
*/

const example_data = [
  {name: "Tiger", color: "yellow"}, 
  {name: "Parrot", color: "red"},
  {name: "Turtle", color: "green"},
  {name: "Wombat", color: "brown"},
]

app.get('/', (req, res) => {
  res.send('API for Colorful Animals is ready!')
})

app.get('/animals', (req, res) => {
  /*connection.query('SELECT * FROM animals', (err, rows, fields) => {
      if(err){
          res.send(400, "No Animals found.");
      } else if(rows){
          res.status(200).json({data: rows})
      }
  })*/
  res.status(200).json({data: example_data})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})