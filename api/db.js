import mysql from "mysql"

export const db = mysql.createConnection({
    database: "engete23_totem_engetera_db",
    
    
    host: process.env.REACT_APP_HOST,
    user: process.env.REACT_APP_USER,
    password:process.env.REACT_APP_PASSWORD
 /*
 
  host: "192.185.176.163",
    user: "engete23_root_eg",
    password: "jppHSKPnGyH57CN"
 

    host: "localhost",
    user: "root",
    password: "password"
*/
})