const express = require('express');
const  bodyParser = require('body-parser');
const router = require('./src/routes/routes.js')

const app = express();
const PORT = 5000;
const HOST = '0.0.0.0';

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.get('/',(req,res) => {
    res.send("Bem vindo a nossa api  com MYSQL :)");
})

app.listen(PORT, HOST)
