import Mailer from "../config/mailer.js";
import { welcomeTemplate } from "../services/email.template.js";

export const sendWelcomeEmail = async (req, res) => {
  try {
    const { email, name } = req.body;

    const transporter = Mailer.createTransporter();
    const template = welcomeTemplate(name);

    await transporter.sendMail({
      from: `"CodeYaan" <${process.env.SMTP_USER}>`,
      to: email,
      subject: template.subject,
      html: template.html,
    });

    res.json({ message: "Welcome email sent ✅" });
  } catch (error) {
    res.status(500).json({ message: "Email failed", error });
  }
};