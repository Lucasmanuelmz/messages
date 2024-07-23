const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');
const router = require('./routes/index');
const bodyParser = require('body-parser')
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extends: true}))
app.use(bodyParser.json())
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extends: true}))


app.use(router)
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log('Seridor iniciado')
})