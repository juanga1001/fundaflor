import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import validEmail from "@secretsofsume/valid-email";

export default function Form({transaction}) {
  const form = useRef();

  const [formData, setFormData] = React.useState({
    name: "",
    last_name: "",
    id_type: "cc",
    id: "",
    email: "",
    phone: "",
    eps: "",
    gender: "male",
    size: "xs",
    address: "",
    transaction: ""
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
      last_name: "",
      id_type: "",
      id: "",
      email: "",
      phone: "",
      eps: "",
      gender: "",
      size: "",
      address: "",
      transaction: ""
    }));
    setAlert("");
  }

  const sendEmail = (e) => {
    e.preventDefault();
    formData.transaction = transaction;

    // console.log(formData);
    Object.keys(formData).forEach(key => {
      if(!formData[key]){
        console.log( `Se requiere el campo ${key}.`);
      }
    })
      
    if (
      formData.name&&
      formData.last_name && 
      // formData.id_type &&
      formData.id &&
      formData.email && 
      formData.phone && 
      formData.eps &&
      // formData.gender && 
      // formData.size && 
      formData.address
      ) {
      if (validEmail(formData.email)) {
        emailjs
        .sendForm(
          "service_k197c1n",
          "template_uacqnpd",
          e.target,
          "7P9pOAEUPp7SVS8Ms"
        )
          .then(
            (result) => {
              console.log(result.text);
              window.location.href = '/registro';
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
          placeholder="Nombre"
          name="name"
          onChange={handleChange}
        />
        <input
          className="input-box"
          type="text"
          placeholder="Apellido"
          name="last_name"
          onChange={handleChange}
        />
        <label className="form-label" htmlFor="id_type">Tipo de Documento:</label> 
        <select
              className="select-box"
              onChange={handleChange}
              name="id_type"
            >
              <option value="cc">Cédula de Ciudadanía</option>
              <option value="ti">Tarjeta de Identidad</option>
              <option value="ce">Cédula de Extranjería</option>
        </select>
        <input
          className="input-box"
          type="text"
          placeholder="Número Documento"
          name="id"
          onChange={handleChange}
        />
        <input
          className="input-box"
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <input
          className="input-box"
          type="text"
          placeholder="Teléfono"
          name="phone"
          onChange={handleChange}
        />
        <input
          className="input-box"
          type="text"
          placeholder="EPS"
          name="eps"
          onChange={handleChange}
        />
        <label className="form-label" htmlFor="gender">Identidad Sexual:</label> 
        <select
              className="select-box"
              onChange={handleChange}
              name="gender"
            >
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
              <option value="otro">Otro</option>
        </select>
        <label className="form-label" htmlFor="size">Talla Camiseta:</label> 
        <select
              className="select-box"
              onChange={handleChange}
              name="size"
            >
              <option value="xs">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
        </select>
        <input
          className="input-box"
          type="text"
          placeholder="Dirección de Residencia"
          name="address"
          onChange={handleChange}
        />
        <input
          className="input-box"
          type="hidden"
          name="transaction"
          value={transaction}
          onChange={handleChange}
        />
        {alert && <p className="QuoteForm-alert">{alert}</p>}
        <input type="submit" value="REGISTRARME" className="btn-form" />
      </form>
    </div>
  );
}
