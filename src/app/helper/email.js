import env from '../../config/env';
import nodemailer from 'nodemailer';

let _instance = null;
class Email {

    constructor() {
        if (!_instance) {
            this.transporter = nodemailer.createTransport({
                host: env.EMAIL_HOST,
                port: env.EMAIL_PORT,
                secure: env.EMAIL_SECURE,
                auth: {
                    user: env.EMAIL_USER,
                    pass: env.EMAIL_PASS
                },
                logger: true,
                debug: false // include SMTP traffic in the logs
            });
            _instance = this;
        }

        return _instance;
    }

    send(message, cb) {
        this.transporter.sendMail(message, (err, info) => {
            cb(err, info);
        });
    }

    verify(cb) {
        // verify connection configuration
        this.transporter.verify(function (error, success) {
            cb(error, success);
        });
    }

}

export default Email;