CREATE DATABASE cars;

CREATE TABLE
  carinventory (
    carinventory_id SERIAL PRIMARY KEY,
    marca VARCHAR(50),
    modelo VARCHAR(50),
    ano INT,
    precio DECIMAL(10, 2),
    color_id INT
  );