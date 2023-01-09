const express = require('express')
const app = express()
const fs = require('fs')

var obj = {
  "name": "Vikram",
  "mobNo": 9878675251,
  "emailId": "vikram@gmail.com",
  "noOfguests": 7,
  "date": "21/01/2023",
  "time": "10:00 PM"
}

app.get('/', (req, res) => {
  fs.readFile('data.json', (err, data) => {
    if (!err) {
      res.write(data)
      res.end()
      return
    }
    res.write("Error in reading data.json file")
    res.end()
    console.log("Error in reading data.json file")
  })
})

app.get('/add', (req, res) => {
  fs.readFile('data.json', (err, data) => {
    if (!err) {
      var updated = JSON.parse(data)
      updated.push(obj)
      fs.writeFile('data.json', JSON.stringify(updated, null, 2), (err) => {
        if (!err) {
          console.log("File Write Successful")
        }
        else {
          console.log(err)
        }
      })
    }
  })
  res.statusCode = 302
  res.setHeader('Location', '/')
  return res.end()
})

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})