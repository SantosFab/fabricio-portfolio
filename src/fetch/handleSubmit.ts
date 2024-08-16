"use client";
import axios from "axios";

interface HandleSubmitProps {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
}

export const handleSubmit = async ({
  firstName,
  lastName,
  email,
  phone,
  message,
}: HandleSubmitProps) => {
  try {
    const response = await axios.post("/api/send-email", {
      firstName,
      lastName,
      email,
      phone,
      message,
    });

    if (response.data.success) {
      alert("Email enviado com sucesso!");
    } else {
      alert("Falha ao enviar o email.");
    }
  } catch (error) {
    console.error("Erro ao enviar o email:", error);
    alert("Ocorreu um erro ao enviar o email.");
  }
};
