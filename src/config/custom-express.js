require('marko/node-require').install();
require('marko/express');

const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

module.exports = () => {

	let app = express();

	app.use('/estatico', express.static('src/app/estaticos'));
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());

	consign()
	.include('src/app/controllers')
	.then('src/app/persistencia')
	.into(app);

	return app;
}