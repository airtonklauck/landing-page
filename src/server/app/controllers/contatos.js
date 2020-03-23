module.exports = app => {
	app.get('/contatos/cadastro', (req, res) => {
		res.marko(require('../views/contatos/cadastro/cadastro.marko'));
	});

	app.post('/contatos/contato', (req, res) => {

		let contato = req.body;
		contato._data = new Date;

		let connection = app.src.server.app.persistencia.connectionFactory();
		let contatoDao = new app.src.server.app.persistencia.ContatoDao(connection);

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