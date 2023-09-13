import mysql from "mysql"
import { Telegraf } from 'telegraf';

const bot = new Telegraf("6241295914:AAGDCWURKhuXREItSYWNRlj9TZezXxwaK5E");



var db_config = {
    host: '192.185.176.163',
      user: 'engete23_root_eg',
      password: 'jppHSKPnGyH57CN',
      database: 'engete23_totem_engetera_db'
  };
  
  export var db;
  
  function handleDisconnect() {
   db = mysql.createConnection(db_config); // Recreate the connection, since
                                                    // the old one cannot be reused.
  
    db.connect(function(err) {              // The server is either down
      if(err) {  
        bot.telegram.sendMessage(1107843237,"Banco de Dados com o erro tal:  " + err + new Date());                                   // or restarting (takes a while sometimes).
        console.log('error when connecting to db:', err);

        setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
      }                                     // to avoid a hot loop, and to allow our node script to
    });                                     // process asynchronous requests in the meantime.
                                            // If you're also serving http, display a 503 error.
    db.on('error', function(err) {
      console.log('db error', err);
      if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
        bot.telegram.sendMessage(1107843237,"Banco de Dados com o erro PROTOCOL_CONNECTION_LOST:  " + err + new Date());    
        handleDisconnect();                         // lost due to either server restart, or a
      } else {                                      // connnection idle timeout (the wait_timeout
        throw err;                                  // server variable configures this)
      }
    });
  }
  
  handleDisconnect();

