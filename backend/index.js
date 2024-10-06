const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 5000; // Ensure this matches the port in your Docker Compose

// Middleware to parse JSON bodies
app.use(express.json());

// Create a connection to the MySQL database
const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "app_user",
  password: process.env.DB_PASSWORD || "app_user_password",
  database: process.env.DB_NAME || "libyan_residents_abroad",
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// Basic route for health check
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Example route to fetch all Libyan residents abroad
app.get("/citizens", (req, res) => {
  const sql = "SELECT * FROM citizens"; // Assuming you have a 'citizens' table
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Failed to fetch citizens:", err);
      res.status(500).json({ error: "Database query error" });
    } else {
      res.json(results);
    }
  });
});

// Example route to add a new citizen
app.post("/citizens", (req, res) => {
  const { name, father, grandfather, family, national_number, embassy_id } =
    req.body;
  const sql =
    "INSERT INTO citizens (name, father, grandfather, family, national_number, embassy_id) VALUES (?, ?, ?, ?, ?, ?)";
  const values = [
    name,
    father,
    grandfather,
    family,
    national_number,
    embassy_id,
  ];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error("Failed to add citizen:", err);
      res.status(500).json({ error: "Database insert error" });
    } else {
      res.json({
        message: "Citizen added successfully",
        citizenId: results.insertId,
      });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});
