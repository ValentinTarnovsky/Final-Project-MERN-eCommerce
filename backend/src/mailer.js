const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const getTransport = () => {
    return nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false, // Determina si se usa SSL/TLS
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD,
        },
    });
};

const setOptions = (to, subject, content) => {
    return {
        from: process.env.SMTP_EMAIL,
        to,
        subject,
        text: content,
    };
};

const sendMail = async (name, email, phone, query) => {
    try {
        const transport = getTransport();
        const subject = `Query from: ${name}`;
        const content = `Phone: ${phone}\nEmail: ${email}\n\nQuery: ${query}`;
        const options = setOptions(process.env.STORE_EMAIL, subject, content);

        await transport.sendMail(options);

        return "Successful Sending";
    } catch (error) {
        console.error(error);
        return "Failed Sending";
    }
};

module.exports = sendMail;