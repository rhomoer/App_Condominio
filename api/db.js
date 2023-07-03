import mysql from "mysql"

export const db = mysql.createConnection({
    database: "engete23_totem_engetera_db",
    
    
    host: "192.185.176.163",
    user: "engete23_root_eg",
    password: "jppHSKPnGyH57CN"
 /*
    
    host: "localhost",
    user: "root",
    password: "password"
*/
})