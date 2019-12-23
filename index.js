const express = require('express');

const port = process.env.PORT || 3000
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static("public"))
app.use(express.static("node_modules"))

app.get('/', (a, b) => {
  fs.createReadStream("public/index.html").pipe(b)
});

app.listen(port, () => {
  console.log('server started');
});