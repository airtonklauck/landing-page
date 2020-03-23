let app = require('./src/server/config/custom-express')();

app.listen(80, () =>
	console.log('Servidor rodando na porta 80')
);