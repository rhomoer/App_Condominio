

import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';

import nodemailer from "nodemailer"

const bot = new Telegraf("6241295914:AAGDCWURKhuXREItSYWNRlj9TZezXxwaK5E");
bot.telegram.sendMessage(1107843237,"Teste22222222 " +  new Date());



const user = "rhomoer@gmail.com"
const pass = "fepsnyhyfxlvuyhy"


const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com", 
        port: "465",
        secure : true,
        auth: {user,pass}
        });

transporter.sendMail({

            from: user,
            to: "rhomoer@gmail.com", 
            replyTo: "rodrigodsouza@hotmail.com", 
            subject: "", 
            text: ""

        })
        .then(() => console.log('Email Enviado com sucesso !'))
        .catch((err) => console.log (err))

