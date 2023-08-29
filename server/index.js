const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// Set up CORS to allow requests from your frontend domain
const allowedOrigins = [
  "http://localhost:3000", // Add your frontend app domain here
  // Add any other allowed origins as needed
];

app.use(cors({ origin: allowedOrigins }));
app.use(express.json()); // req.body

// ROUTES

// Create a new car
app.post("/cars", async (req, res) => {
  try {
    const { marca, modelo, ano, precio, email, color_id } = req.body;
    const newCar = await pool.query(
      "INSERT INTO carinventory (marca, modelo, ano, precio, email, color_id) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [marca, modelo, ano, precio, email, color_id]
    );
    
    res.json(newCar.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Get all cars
app.get("/cars", async (req, res) => {
  try {
    const allCars = await pool.query("SELECT * FROM carinventory");
    res.json(allCars.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Get a car
app.get("/cars/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const car = await pool.query("SELECT * FROM carinventory WHERE carinventory_id = $1", [id]);
    res.json(car.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Update a car
app.put("/cars/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { marca, modelo, ano, precio, email, color_id } = req.body;
    const updateCar = await pool.query(
      "UPDATE carinventory SET marca = $1, modelo = $2, ano = $3, precio = $4, email= $5, color_id = $6 WHERE carinventory_id = $7",
      [marca, modelo, ano, precio, email, color_id, id]
    );
    res.json("Car was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

// Delete a car
app.delete("/cars/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCar = await pool.query("DELETE FROM carinventory WHERE carinventory_id = $1", [id]);
    res.json("Car was deleted!");
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(3001, () => {
  console.log("Server has started on port 3001");
});
