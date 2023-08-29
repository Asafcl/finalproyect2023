import React, { Fragment, useState } from "react";
import { SERVER_URL } from "../config/config";

const EditCars = ({ car }) => {
  const [marca, setMarca] = useState(car.marca);
  const [modelo, setModelo] = useState(car.modelo);
  const [ano, setAno] = useState(car.ano);
  const [precio, setPrecio] = useState(car.precio);
  const [email, setEmail] = useState(car.email);
  const [color_id, setColorId] = useState(car.color_id);

  const updateCar = async (e) => {
    e.preventDefault();
    try {
      const body = { marca, modelo, ano, precio, email, color_id };
      const response = await fetch(`${SERVER_URL}/cars/${car.carinventory_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
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
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${car.carinventory_id}`}
        //disabled={car.color_id ===3 ? true: false} disabled Edit if isn't the user from this car
      >
        Edit
      </button>

      <div class="modal" id={`id${car.carinventory_id}`}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Car</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => {
                  // Reset the state values to their original values
                  setMarca(car.marca);
                  setModelo(car.modelo);
                  setAno(car.ano);
                  setPrecio(car.precio);
                  setEmail(car.email)
                  setColorId(car.color_id);
                }}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
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
              <label>COLOR:</label>
              <input
                type="text"
                className="form-control"
                value={color_id}
                onChange={(e) => setColorId(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={updateCar}
              >
                Save
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => {
                  // Reset the state values to their original values
                  setMarca(car.marca);
                  setModelo(car.modelo);
                  setAno(car.ano);
                  setPrecio(car.precio);
                  setEmail(car.email)
                  setColorId(car.color_id);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditCars;
