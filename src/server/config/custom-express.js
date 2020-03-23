require('marko/node-require').install();
require('marko/express');

const express = require('express');
const bodyParser = require('body-parser');


let app = express();

app.use('/client', express.static('src/client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const index = require('../app/controllers/index');
const contatos = require('../app/controllers/contatos');
index(app);
contatos(app);

module.exports = app;