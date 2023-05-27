const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

app.listen(8080, function () {
    console.log('listening on 8080')
  })