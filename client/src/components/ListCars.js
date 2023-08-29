import React, { Fragment, useEffect, useState } from "react";
import EditCars from "./EditCars";
import { SERVER_URL } from "../config/config";

const ListCars = () => {
  const [cars, setCars] = useState([]);

  const deleteCar = async (id) => {
    try {
      const deleteCar = await fetch(`${SERVER_URL}/cars/${id}`, {
        method: "DELETE",
      });

      console.log(deleteCar);

      setCars(cars.filter((car) => car.carinventory_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getCars = async () => {
    try {
      const response = await fetch(`${SERVER_URL}/cars`);
      const jsonData = await response.json();

      setCars(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getCars();
  }, []);

  console.log(cars);

  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>MARCA</th>
            <th>MODELO</th>
            <th>AÑO</th>
            <th>PRECIO</th>
            <th>EMAIL</th>
            <th>COLOR ID</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car.carinventory_id	}>
              <td>{car.marca}</td>
              <td>{car.modelo}</td>
              <td>{car.ano}</td>
              <td>{car.precio}</td>
              <td>{car.email}</td>
              <td>{car.color_id}</td>
              <td>
                <EditCars car={car }
                />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteCar(car.carinventory_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListCars;

