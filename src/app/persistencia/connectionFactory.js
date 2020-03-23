let mysql  = require('mysql');

function createDBConnection(){
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '6tgad9avk',
            database: 'agroambiental'
        });
}

module.exports = function() {
    return createDBConnection;
}