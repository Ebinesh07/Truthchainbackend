const mysql = require("mysql2");

const mydb = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: 'ebinesh1825',
    database: 'truthchain',
    port: 3306
});

mydb.connect((err)=>{
    if(err){
        
        console.log(err,"Mysql Database connection failed");
    }
    else{
        console.log("Database connected successfully");
    }
});
module.exports = mydb;