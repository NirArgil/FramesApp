const nodemailer = require('nodemailer');

const USER_NAME = process.env.REACT_APP_USER_NAME;
const PASSWORD = process.env.REACT_APP_PASSWORD;
const HOST = process.env.REACT_APP_HOST;

exports.handler = function(event, context, callback) {

    let data = JSON.parse(event.body)

    let transporter = nodemailer.createTransport({
        host: `${HOST}`,
        port: 465,
        secure: true,
        auth:{
         user: `${USER_NAME}`,
         pass: `${PASSWORD}`,
        //  user:[YOUR SMTP SERVER USERNAME],
        //  pass: [YOUR SMTP SERVER PASSWORD]
    }
    });

    transporter.sendMail({
        from: "send@example.com",
        to: "nirargil9@gmail.com",
        subject: `Raphael Website Contact Form Message`,
        html: `
            <h3>Email from ${data.name}, <br>
            Email: ${data.email}<h3>.
            Phone num: ${data.phone} <br>
            Message:
            <p>${data.message}<p>
            `
    }, function(error, info) {
        if (error) {
            callback(error);
        } else {
            callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                   'result': 'success'
                })
        });
        }
    });
}