

import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';


const bot = new Telegraf("6241295914:AAGDCWURKhuXREItSYWNRlj9TZezXxwaK5E");
bot.telegram.sendMessage(1107843237,"Teste " +  new Date());
