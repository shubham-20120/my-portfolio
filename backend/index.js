const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(port, () => console.log("-----------------------------------------Server Running"));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "patelskd79@gmail.com",
    pass: "particlepatel12543",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log('error in varifying: ', error);
  } else {
    console.log("Ready to Send");
  }
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
  // console.log('server is runnig in heroku');
}
router.post("/contact", (req, res) => {
  console.log('====================================');
  console.log(req.body);
  console.log('====================================');
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: name,
    to: "patelskd79@gmail.com",
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log('error in sending message', error);
      res.json({ status: "ERROR" });
    } else {
      console.log('Message sent');
      res.json({ status: "Message Sent" });
    }
  });
});