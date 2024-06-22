const nodemailer = require('nodemailer');

const sendEmail = async options => {
    // Create transporter
    const transporter = nodemailer.createTransport({
        host: process.env.HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
        // Activate in gmail "less secure app" option if using gmail
    })
    // Define the email options
    const mailOptions = {
        from: 'Evan Roberts <email@gmail.com>',
        to: options.email,
        subject: options.subject,
        text: options.message,
        // html:
    }
    // Send email
    await transporter.sendMail(mailOptions)
}

module.exports = sendEmail