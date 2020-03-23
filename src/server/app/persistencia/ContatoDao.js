class ContatoDao {
	constructor(connection) {
    	this._connection = connection;
	}

	criaTabela() {
		const sql = 'create table if not exists contatos (_nome varchar(50) not null, _telefone varchar(30) not null primary key, _data datetime not null)';
		this._connection.query(sql, erro => {
			if(erro) {
				console.log(`A tabela contatos não foi criada pelo seguinte motivo: ${erro}`);
			}
			else {
				console.log("Se a Tabela contatos ainda não existia, ela foi criada com sucesso.");
			}
		});
	}

	salva(dados, callback) {
	    this._connection.query('INSERT INTO contatos SET ?', dados, callback);
	}

	buscaId(id, callback) {
	    this._connection.query("select * from contatos where id = ?",[id], callback);
	}
}

module.exports = ContatoDao;