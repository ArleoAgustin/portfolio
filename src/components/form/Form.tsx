import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Box, TextField } from "@mui/material";
import "./Form.css";
import ButtonSimple from "../buttons/simpleButton/ButtonSimple";
function Form() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "", // El campo para el mensaje
  });

  // Función para manejar cambios en el formulario
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Actualizamos el estado con el nuevo valor
    }));
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    console.log("Datos del formulario:", formData); // Los datos del formulario
  };

  return (
<Box
  component="form"
  onSubmit={handleSubmit}
  sx={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
    minWidth: "20%",
    maxWidth: "83%",
    margin: "auto",
    padding: 3,
    marginBottom: "8rem",
    borderRadius: 2,
    boxShadow: 3,
    bgcolor: "white",
    color: "black",

    '@media (min-width: 1100px)': {
      minWidth: "25%",
      maxWidth: "10%",
      minHeight: "65vh",
      marginLeft: "14%",
    },
  }}
>

<div className="containerTitle">
          <h1 className="titleContact">{t("contact_title")}</h1>
        </div>

      <label>{t("contact_name")}</label>
      <TextField
        label={t("placeHolder_name")}
        variant="outlined"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        required
        sx={{ borderRadius: 8 }}
        className="inputName"
      />
      <label>{t("contact_email")}</label>
      <TextField
        label={t("placeHolder_email")}
        variant="outlined"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        required
        className="inputName"
      />
      <label>{t("contact_message")}</label>
      <textarea
        className="textArea"
        placeholder={t("placeHolder_message")}
        onChange={handleChange}
        name="message"
        id="message"
      />

      <ButtonSimple text={t("contact_send")} type="submit" />
    </Box>
  );
}

export default Form;
