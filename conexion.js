var mysql = require('mysql');

var conexion = mysql.createConnection({
    host:'3.91.175.199',
    database:'usuarios_db',
    user:'fernando',
    password:'quiroz',
});



conexion.connect(function(error) {
    if(error){
        throw error;
    }else{
        console.log('CONEXION EXITOSA');
    }
});
module.exports = conexion;