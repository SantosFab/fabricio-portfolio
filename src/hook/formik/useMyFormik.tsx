"use client";
import { useFormik } from "formik";
import * as yup from "yup";

export const useMyFormik = () => {
  const schema = yup.object().shape({
    firstName: yup.string().required("Por favor, digite seu primeiro nome"),
    lastName: yup.string().required("Por favor, digite seu sobrenome"),
    email: yup.string().required("Por favor, digite seu e-mail para contato"),
    phone: yup
      .string()
      .matches(
        /^\(\d{2}\) \d{5}-\d{4}$/,
        "Por favor, digite no formato (xx) xxxxx-xxxx"
      ),
    message: yup
      .string()
      .required("Por favor, digite a mensagem que deseja enviar"),
  });

  type FormikValues = yup.InferType<typeof schema>;

  const formik = useFormik<FormikValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: schema,
    onSubmit(values, { resetForm }) {
      console.log("Está funcionando ", values);
    },
  });

  return formik;
};
