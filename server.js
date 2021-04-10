// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// const cors = require('cors');

// const app = express();

// const port = 4444;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(cors());

// app.listen(port, () => {
//   console.log('We are live on port 4444');
// });


// app.get('/', (req, res) => {
//   res.send('Welcome to my api');
// })

// app.post('/api/v1', (req,res) => {
//   var data = req.body;

// var smtpTransport = nodemailer.createTransport({
//   service: 'Gmail',
//   port: 465,
//   auth: {
//     user: "nirargil5@gmail.com",
//     pass: "nir12345",
//   }
// });

// var mailOptions = {
//   from: data.email,
//   to: 'nirargil5@gmail.com',
//   subject: 'ENTER_YOUR_SUBJECT',
//   html: `<p>${data.name}</p>
//           <p>${data.email}</p>
//           <p>${data.message}</p>`
// };

// smtpTransport.sendMail(mailOptions,
// (error, response) => {
//   if(error) {
//     res.send(error)
//   }else {
//     res.send('Success')
//   }
//   smtpTransport.close();
// });

// })


// const express = require("express");
// const router = express.Router();
// const cors = require("cors");
// const nodemailer = require("nodemailer");

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use("/", router);
// app.listen(5000, () => console.log("Server Running"));

// const contactEmail = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: "nirargil5@gmail.com",
//       pass: "nir12345",
//     },
//   });
  
//   contactEmail.verify((error) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Ready to Send");
//     }
//   });

//   router.post("/contact", (req, res) => {
//     const name = req.body.name;
//     const email = req.body.email;
//     const message = req.body.message; 
//     const mail = {
//       from: name,
//       to: "nirargil5@gmail.com",
//       subject: "Contact Form Submission",
//       html: `<p>Name: ${name}</p>
//              <p>Email: ${email}</p>
//              <p>Message: ${message}</p>`,
//     };
//     contactEmail.sendMail(mail, (error) => {
//       if (error) {
//         res.json({ status: "ERROR" });
//       } else {
//         res.json({ status: "Message Sent" });
//       }
//     });
//   });

// // async..await is not allowed in global scope, must use a wrapper
// // async function main() {
// //     // Generate test SMTP service account from ethereal.email
// //     // Only needed if you don't have a real mail account for testing
// //     let testAccount = await nodemailer.createTestAccount();
  
// //     // create reusable transporter object using the default SMTP transport
// //     let transporter = nodemailer.createTransport({
// //       host: "smtp.ethereal.email",
// //       port: 587,
// //       secure: false, // true for 465, false for other ports
// //       auth: {
// //         user: testAccount.user, // generated ethereal user
// //         pass: testAccount.pass, // generated ethereal password
// //       },
// //     });
  
// //     // send mail with defined transport object
// //     let info = await transporter.sendMail({
// //       from: '"Fred Foo 👻" <foo@example.com>', // sender address
// //       to: "bar@example.com, baz@example.com", // list of receivers
// //       subject: "Hello ✔", // Subject line
// //       text: "Hello world?", // plain text body
// //       html: "<b>Hello world?</b>", // html body
// //     });
  
// //     console.log("Message sent: %s", info.messageId);
// //     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
// //     // Preview only available when sending through an Ethereal account
// //     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// //     // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// //   }
  
// //   main().catch(console.error);