import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import validEmail from "@secretsofsume/valid-email";

export default function Form(props) {
  const form = useRef();

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const [alert, setAlert] = React.useState("");

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function resetForm() {
    setFormData((prevFormData) => ({
      name: "",
      email: "",
      message: "",
    }));
    setAlert("");
  }

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(formData)
    if (formData.name && formData.email && formData.message) {
      if (validEmail(formData.email)) {
        emailjs
        .sendForm(
          "service_r68clmk",
          "template_ubqv8gh",
          e.target,
          "ktzfjeGE1qlrmKquL"
        )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
        e.target.reset();
        resetForm();
      } else {
        setAlert("Ingrese un email válido");
      }
    } else {
      setAlert("Se requieren todos los campos");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={sendEmail} className="form" ref={form}>
        <input
          className="input-box"
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
        />
        <input
          className="input-box"
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <textarea
          className="input-box textarea"
          placeholder="Message"
          name="message"
          onChange={handleChange}
        />
        {alert && <p className="QuoteForm-alert">{alert}</p>}
        <input type="submit" value="CONTACTAR" className="btn-form" />
      </form>
    </div>
  );
}
