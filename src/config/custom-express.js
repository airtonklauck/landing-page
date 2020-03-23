require('marko/node-require').install();
require('marko/express');

const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

module.exports = () => {

	let app = express();

	app.use('/client', express.static('src/client'));
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());

	consign()
	.include('src/server/app/controllers')
	.then('src/server/app/persistencia')
	.into(app);

	return app;
}