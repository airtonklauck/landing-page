function ContatoDao(connection) {
    this._connection = connection;
}

ContatoDao.prototype.criaTabela = function() {

	this._connection.query('create table if not exists contatos (_nome varchar(50) not null, _telefone varchar(30) not null primary key, _data datetime not null)', erro => {

		if(erro) {
			console.log("A tabela contatos não foi criada pelo seguinte motivo:" + erro);
		}
		else {
			console.log("Se a Tabela contatos ainda não existia, ela foi criada com sucesso.");
		}
	});
}

ContatoDao.prototype.salva = function(email, callback) {
    this._connection.query('INSERT INTO contatos SET ?', email, callback);
}

ContatoDao.prototype.buscaPorId = function (id, callback) {
    this._connection.query("select * from contatos where id = ?",[id], callback);
}

module.exports = function(){
    return ContatoDao;
}