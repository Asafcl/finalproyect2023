import React, { Fragment, useState } from "react";
import { SERVER_URL } from "../config/config";

const InputCars = () => {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [precio, setPrecio] = useState("");
  const [email, setEmail] = useState("");
  const [color_id, setColorId] = useState("");
 

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { marca, modelo, ano, precio, email, color_id };
      const response = await fetch(`${SERVER_URL}/cars`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      console.log(response);

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">INSERT CAR TO SELL</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <label>MARCA:</label>
        <input
          type="text"
          className="form-control"
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
        />
        <label>MODELO:</label>
        <input
          type="text"
          className="form-control"
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
        />
        <label>AÑO:</label>
        <input
          type="text"
          className="form-control"
          value={ano}
          onChange={(e) => setAno(e.target.value)}
        />
        <label>PRECIO:</label>
        <input
          type="text"
          className="form-control"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        <label>EMAIL:</label>
        <input
          type="text"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>COLOR ID:</label>
        <input
          type="text"
          className="form-control"
          value={color_id}
          onChange={(e) => setColorId(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputCars;
