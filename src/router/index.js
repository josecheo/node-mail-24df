const { Router } = require("express");
const nodemailer = require("nodemailer");
const router = Router();

router.post("/send-email", async (req, res) => {
  const { name, phone, email, message } = req.body;

  contentHTML = `
<h1> Informacion de usuario </h1>
<ul> 
  <li>username: ${name}</li>
  <li>Telefono: ${phone}</li>
  <li>Correo: ${email}</li>
</ul>
  <p>Mensaje: ${message}</p>
`;

  let transporter = nodemailer.createTransport({
    host: "mail.24d.pe",
    port: 465,
    secure: true,
    auth: {
      user: "info@24d.pe", // generated ethereal user
      pass: "6vQ5Om3nn2vZ", // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let info = await transporter.sendMail({
    from: '"Enviado 👻" <info@24d.pe>', // sender address
    to: "ventas@24d.pe", // list of receivers
    subject: "Nuevo Mensaje desde Web ✔", // Subject line
    html: contentHTML, // html body
  });

  res.redirect("24d.pe");
});

module.exports = router;
