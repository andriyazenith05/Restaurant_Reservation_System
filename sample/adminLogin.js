const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser")
const encoder = bodyParser.urlencoded()

const app = express();

const connection = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "zenith",
  database: "sample",
});

connection.connect(function (error) {
  if (error) throw error
  else console.log("Connected to the database successfully !")
})

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html")
})

app.get("/admin", function (req, res) {
  res.sendFile(__dirname + "/admin.html")
})

app.post("/admin", encoder, function (req, res) {
  var username = req.body.username
  //var password = req.body.password
  connection.query("select * from admin_details where admin_username = ?", [username], function (error, results, fields) {
    if (results.length > 0) {
      res.redirect("/adminpage");
      console.log("Login Successfull !")
    }
    else {
      res.redirect("/admin")
    }
    res.end()
  })
})

app.get("/adminpage", function (req, res) {
  res.sendFile(__dirname + "/adminpage.html")
})

app.post("/insert", encoder, function (req, res) {
  console.log(req.body)
  var id = req.body.id
  var name = req.body.name
  var regno = req.body.regno
  var dob = req.body.dob

  const sqlInsert = "insert into student (stud_id, stud_name, stud_regno, stud_dob) VALUES (?, ?, ?, ?)";
  connection.query(sqlInsert, [id, name, regno, dob], function (error) {
    if (error) throw error
    else {
      console.log("Data inserted successfully !")
      res.redirect("/adminpage")
    }
  })
})

app.post("/update", encoder, function (req, res) {
  console.log(req.body);
  var stud_id = req.body.stud_id
  console.log(stud_id);
  var data = req.body.upd_data
  var value = req.body.upd_value
  console.log(value)
  var sqlUpdate = "UPDATE student set " + data + " = " + value + " WHERE stud_id =" + stud_id + ";"
  connection.query(sqlUpdate, function (error) {
    if (error) throw error
    else {
      console.log("Data updated successfully !")
      res.redirect("/adminpage")
    }
  })
})

app.post('/delete', encoder, function (req, res) {
  console.log(req.body);
  var stud_id = req.body.del_stud
  var sqlDelete = "delete from student WHERE stud_id=" + stud_id + ";"
  connection.query(sqlDelete, function (err) {
    if (err) throw err
    else {
      console.log("Data deleted successfully !")
      res.redirect("/adminpage")
    }
  })
})

app.post('/search', encoder, function (req, res) {
  console.log(req.body);
  var stud_id = req.body.search_stud
  var sqlSearch = "select * from student WHERE stud_id=" + stud_id + ";"
  connection.query(sqlSearch, function (err, result) {
    if (err) throw err
    //res.send(result)
    res.write('<table style="border:1px solid; border-collapse: collapse; width: 100%;"><tr>')
    for (var col in result[0]) {
      res.write('<td style="border:1px solid; text-align: center; padding:10px"><label>' + col + '<label></td>')
      //res.write('</tr>')
    }
    for (var row in result) {
      res.write('<tr>')
      for (var col in result[row]) {
        res.write('<td style="border:1px solid; text-align: center; padding:10px"><label>' + result[row][col] + '<label></td>')
      }
      res.write('</tr>')
    }
    res.end('</tabel>')
  })
})

app.post('/display', encoder, function (req, res) {
  console.log(req.body);
  var sqlDisplay = "select * from student;"
  connection.query(sqlDisplay, function (err, result) {
    if (err) throw err
    //res.send(result)
    res.redirect("/dis")
    /*res.write('<table style="border:1px solid; border-collapse: collapse; width: 100%;"><tr>')
    for (var col in result[0]) {
      res.write('<td style="border:1px solid; text-align: center; padding:10px"><label>' + col + '<label></td>')
      //res.write('</tr>')
    }
    for (var row in result) {
      res.write('<tr>')
      for (var col in result[row]) {
        res.write('<td style="border:1px solid; text-align: center; padding:10px"><label>' + result[row][col] + '<label></td>')
      }
      res.write('</tr>')
    }
    res.end('</tabel>')*/
  })
})

app.get("/dis", function (req, res) {
  res.sendFile(__dirname + "/display1.html")
})

app.listen(3000);
