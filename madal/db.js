const mysql = require("mysql2");

console.log("HOST:", process.env.MYSQLHOST);
console.log("USER:", process.env.MYSQLUSER);
console.log("DB:", process.env.MYSQLDATABASE);

const mydb = mysql.createConnection({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    port: process.env.MYSQLPORT
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