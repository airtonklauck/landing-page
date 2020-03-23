class ConnectionFactory {
	
	static create(host, user, password, database) {

		let mysql  = require('mysql');

		return mysql.createConnection({
            host: host,
            user: user,
            password: password,
            database: database
        });
	}
}

module.exports = ConnectionFactory;