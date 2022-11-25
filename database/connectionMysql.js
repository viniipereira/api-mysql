var knex = require('knex')({
    client: 'mysql2',
    connection: {
        host : 'localhost',  
        user : 'root', 
        password : '', 
        database : 'usuarios'
     }
});
module.exports = knex