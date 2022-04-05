import nodemailer, { SendMailOptions } from 'nodemailer';

export const sendEmail = (toEmail: string, subject: string, text: string) => {
    const transporter = getTransporter();

    const mailOptions = {
        from: process.env.EMAIL ?? '',
        to: toEmail,
        subject,
        text
    }

    transporter.sendMail(mailOptions, (error, info) => {
        const response = error ? error : info;
        // tslint:disable-next-line:no-console
        console.log('sendMail Response', response);
    });
};

const getTransporter = () => nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number.parseInt(process.env.EMAIL_PORT, 0),
    secure: true,
    auth: {
        user: process.env.EMAIL ?? '',
        pass: process.env.EMAIL_PASSWORD ?? ''
    }
});
