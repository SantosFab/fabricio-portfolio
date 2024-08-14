"use client";
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { firstName, lastName, email, phone, message } = req.body;

    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_PASS;

    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
          user,
          pass,
        },
      });

      const mailOptions = {
        from: email,
        to: user,
        subject: `Form do portfólio - ${firstName} ${lastName}`,
        text: `Nome: ${firstName} ${lastName}\nEmail: ${email}${
          phone && `\nTelefone: ${phone}`
        }\nMensagem: ${message}`,
        replyTo: email,
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      res.status(500).json({ error: "Falha ao enviar email" });
    }
  } else {
    res.status(405).json({ error: "Método não permitido" });
  }
}
