const express = require('express');
const  bodyParser = require('body-parser');
const router = require('./routes/routes')

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.get('/',(req,res) => {
    res.send("Bem vindo a nossa api :)");
})

app.listen(PORT, (req,res) => {
    console.log("funcionou");
})
