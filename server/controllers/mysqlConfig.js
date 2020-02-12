var mysql = require('mysql');
var config = require('./defaultConfig');

var pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE
});

let allServices = {
    query: function (sql, values) {

        return new Promise((resolve, reject) => {
            pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err)
                } else {
                    connection.query(sql, values, (err, rows) => {

                        if (err) {
                            reject(err)
                        } else {
                            resolve(JSON.parse(JSON.stringify(rows)))
                        }
                        connection.release()
                    })
                }
            })
        })

    },
   findUserData: function (stuId) {
        let _sql = `select * from users where stuId="${stuId}";`
        return allServices.query(_sql)
    },
    addUserData: (obj) => {
         let _sql = "insert into users(stuId, name, pass) values (?, ?, ?);"
         return allServices.query(_sql, obj)
     },
}

module.exports = allServices;