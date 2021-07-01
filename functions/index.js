// const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
//functions/index.js

//import needed modules
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

//when this cloud function is already deployed, change the origin to 'https://your-deployed-app-url
const cors = require('cors')({ origin: true });

//create and config transporter
let transporter = nodemailer.createTransport({
    host: 'your host',
    port: your - port - number,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'your@email',
        pass: 'your password.',
    },
});

//export the cloud function called `sendEmail`
exports.sendEmail = functions.https.onRequest((req, res) => {
    //for testing purposes
    console.log(
        'from sendEmail function. The request object is:',
        JSON.stringify(req.body)
    );

    //enable CORS using the `cors` express middleware.
    cors(req, res, () => {
        //get contact form data from the req and then assigned it to variables
        const email = req.body.data.email;
        const name = req.body.data.name;
        const message = req.body.data.message;

        //config the email message
        const mailOptions = {
            from: email,
            to: `your@email`,
            subject: 'New message from the nodemailer-form app',
            text: `${name} says: ${message}`,
        };

        //call the built in `sendMail` function and return different responses upon success and failure
        return transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).send({
                    data: {
                        status: 500,
                        message: error.toString(),
                    },
                });
            }

            return res.status(200).send({
                data: {
                    status: 200,
                    message: 'sent',
                },
            });
        });
    });
});