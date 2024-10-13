const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 5000;

app.use(express.json());

const dbConfig = {
  host: process.env.DB_HOST || "db",
  user: process.env.DB_USER || "user",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "libyan_abroad",
};

function connectWithRetry() {
  const db = mysql.createConnection(dbConfig);
  
  db.connect((err) => {
    if (err) {
      console.error('Database connection failed:', err);
      console.log('Retrying in 5 seconds...');
      setTimeout(connectWithRetry, 5000);
    } else {
      console.log('Connected to MySQL database');
      setupRoutes(db);
    }
  });

  db.on('error', (err) => {
    console.error('Database error:', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      connectWithRetry();
    } else {
      throw err;
    }
  });
}

function setupRoutes(db) {
  app.get("/", (req, res) => {
    res.send("Backend is running!");
  });

  app.get("/citizens", (req, res) => {
    const sql = "SELECT * FROM citizens";
    db.query(sql, (err, results) => {
      if (err) {
        console.error("Failed to fetch citizens:", err);
        res.status(500).json({ error: "Database query error" });
      } else {
        res.json(results);
      }
    });
  });

  app.post("/citizens", (req, res) => {
    const { name, father, grandfather, family, national_number, embassy_id } = req.body;
    const sql = "INSERT INTO citizens (name, father, grandfather, family, national_number, embassy_id) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [name, father, grandfather, family, national_number, embassy_id];

    db.query(sql, values, (err, results) => {
      if (err) {
        console.error("Failed to add citizen:", err);
        res.status(500).json({ error: "Database insert error" });
      } else {
        res.json({ message: "Citizen added successfully", citizenId: results.insertId });
      }
    });
  });
}

app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});

connectWithRetry();