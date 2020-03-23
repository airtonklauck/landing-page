module.exports = app => {

	app.post('/contatos/contato', (req, res) => {

		const connectionFactory = require('../persistencia/ConnectionFactory');
		
		const ContatoDao = require('../persistencia/ContatoDao');

		let contato = req.body;
		contato._data = new Date;

		let contatoDao = new ContatoDao(connectionFactory
		.create('localhost', 'root', '6tgad9avk', 'agroambiental'));

		contatoDao.criaTabela();
		contatoDao.salva(contato, function(erro, resultado) {
			if(erro) {
				if(erro.code == 'ER_DUP_ENTRY') res.send('Email já cadastrado.');
				return;
			}

			res.send('Contato salvo com sucesso.');

		});
	});
}