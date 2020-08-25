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
    host: "smtp.zoho.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "contacto@jacreativedes.com", // generated ethereal user
      pass: "#Stey123", // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let info = await transporter.sendMail({
    from: '"Enviado 👻" <contacto@jacreativedes.com>', // sender address
    to: "joseche0.ja@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    html: contentHTML, // html body
  });

  res.redirect("https://jacreativedes.com");
});

module.exports = router;
