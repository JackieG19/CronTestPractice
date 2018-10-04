const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const main = require('./router/api/main');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/main', main);

app.get("/", (req, res) => res.send("Hello"));

const port = (process.env.PORT || 5000);

app.listen(port, () => console.log(`server running on port ${port}`))