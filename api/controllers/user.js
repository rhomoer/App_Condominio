import { db } from "../db.js";
//import { email } from "../email.js";
//import { telegram } from "../telegram.js";
import { Telegraf } from 'telegraf';
import nodemailer from "nodemailer";
import fs from 'fs'
import { error } from "console";
import { ApiError } from "../helpers/api-erros.js";



const user = "rhomoer@gmail.com"
const pass = "fepsnyhyfxlvuyhy"

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", 
  port: "465",
  secure : true,
  auth: {user,pass}
  });

const bot = new Telegraf("6241295914:AAGDCWURKhuXREItSYWNRlj9TZezXxwaK5E");
//const messageErroTelegram = bot.telegram.sendMessage(1107843237,"Acessando o Sistema de Reservads :   " +  new Date());

export const getUsers = (_, res) => {




 /*
  transporter.sendMail({

    from: user,
    to: "rhomoer@gmail.com", 
    replyTo: "rodrigodsouza@hotmail.com", 
    subject: "getUsers", 
    text: ""

})
.then(() => console.log('Email Enviado com sucesso do get!'))
.catch((err) => console.log (err))


  bot.telegram.sendMessage(1107843237,"Acessando o Sistema de Reservads :   " +  new Date());

  */
  const q = "SELECT * FROM Reservas order by data_nascimento asc ";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  transporter.sendMail({

    from: user,
    to: "rhomoer@gmail.com", 
    replyTo: "rodrigodsouza@hotmail.com", 
    subject: "addUser", 
    text: ""

})
.then(() => console.log('Email Enviado com sucesso ! do add'))
.catch((err) => console.log (err))
  
bot.telegram.sendMessage(1107843237,"Adicionado nova Reserva:   " +  new Date());

  const q =
    "INSERT INTO usuarios(`nome`, `email`, `fone`, `data_nascimento`) VALUES(?)";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento,
  ];

 // const bot = new Telegraf("6241295914:AAGDCWURKhuXREItSYWNRlj9TZezXxwaK5E");
 
  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Reserva agendada com sucesso.");


  });
};

export const updateUser = (req, res) => {
 
  transporter.sendMail({

    from: user,
    to: "rhomoer@gmail.com", 
    replyTo: "rodrigodsouza@hotmail.com", 
    subject: "updateUser", 
    text: ""

})
.then(() => console.log('Email Enviado com sucesso ! do update'))
.catch((err) => console.log (err))
  bot.telegram.sendMessage(1107843237,"Atualizando a Reserva :   " +  new Date());


  const q =
    "UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` = ?, `data_nascimento` = ? WHERE `id` = ?";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Reserva atualizado com sucesso.");
  });
};
 
export const deleteUser = (req, res) => {
 
  transporter.sendMail({

    from: user,
    to: "rhomoer@gmail.com", 
    replyTo: "rodrigodsouza@hotmail.com", 
    subject: "deleteUser", 
    text: ""

})
.then(() => console.log('Email Enviado com sucesso ! do delete'))
.catch((err) => console.log (err))
 
  bot.telegram.sendMessage(1107843237,"Deletando as reservas :   " +  new Date());
  const q = "DELETE FROM usuarios WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Reserva deletado com sucesso.");
  });
};









 