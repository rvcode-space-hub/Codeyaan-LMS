import nodemailer from "nodemailer";
import env from "./env.js";

class Mailer {
  static createTransporter() {
    return nodemailer.createTransport({
      host: env.smtp_host,
      port: env.smtp_port,      // ✅ stable port
      secure: false,      // ❗ TLS
      auth: {
        user: env.smtp_user,
        pass: env.smtp_password,
      },
      tls: {
        rejectUnauthorized: false, // (optional, dev ke liye)
      },
    });
  }
}

export default Mailer;