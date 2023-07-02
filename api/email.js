
import nodemailer from "nodemailer"


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

