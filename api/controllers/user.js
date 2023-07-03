import { db } from "../db.js";
//import { email } from "../email.js";
//import { telegram } from "../telegram.js";
import { Telegraf } from 'telegraf';

const bot = new Telegraf("6241295914:AAGDCWURKhuXREItSYWNRlj9TZezXxwaK5E");

export const getUsers = (_, res) => {
  const q = "SELECT * FROM Reservas";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  
  
bot.telegram.sendMessage(1107843237,"Teste " +  new Date());

  const q =
    "INSERT INTO usuarios(`nome`, `email`, `fone`, `data_nascimento`) VALUES(?)";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento,
  ];

 // const bot = new Telegraf("6241295914:AAGDCWURKhuXREItSYWNRlj9TZezXxwaK5E");
  bot.telegram.sendMessage(1107843237,"Teste " +  new Date());
  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Reserva agendada com sucesso.");


  });
};

export const updateUser = (req, res) => {
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
bot.telegram.sendMessage(1107843237,"Teste " +  new Date());
 
export const deleteUser = (req, res) => {
  const q = "DELETE FROM usuarios WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Reserva deletado com sucesso.");
  });
};

bot.telegram.sendMessage(1107843237,"Teste " +  new Date());
 