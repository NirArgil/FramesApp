const nodemailer = require('nodemailer');

// const USER_NAME = process.env.REACT_APP_USER_NAME;
// const PASSWORD = process.env.REACT_APP_PASSWORD;

exports.handler = function(event, context, callback) {

    let data = JSON.parse(event.body)

    let transporter = nodemailer.createTransport({
        service: "Gmail",
        port: 465,
        secure: true,
        auth: {
            type: "OAuth2",   
            user: process.env.REACT_APP_USER_NAME,
            pass: process.env.REACT_APP_PASSWORD,  
            clientId: process.env.OAUTH_CLIENTID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    }
    });

    transporter.sendMail({
        from: "send@example.com",
        to: process.env.REACT_APP_USER_NAME,
        subject: `New Message Form Raphael Website`,
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