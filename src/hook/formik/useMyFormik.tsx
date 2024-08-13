"use client";
import { useFormik } from "formik";
import * as yup from "yup";

export const useMyFormik = () => {
  const schema = yup.object().shape({
    firstName: yup.string().required("Por favor, digite seu primeiro nome"),
    lastName: yup.string().required("Por favor, digite seu sobrenome"),
    email: yup.string().required("Por favor, digite seu e-mail"),
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
      message: "",
    },
    validationSchema: schema,
    onSubmit(values, { resetForm }) {
      console.log("Está funcionando ", values);
    },
  });

  return formik;
};
