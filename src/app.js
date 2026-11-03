const express = require("express");
const todoRoutes = require("./routes/todo.routes");

const app = express();

// Parsing JSON body dari request
app.use(express.json());

// Mendaftarkan semua route todo dengan prefix /api/todos
app.use("/api/todos", todoRoutes);

// Route dasar untuk cek server hidup
app.get("/", (req, res) => {
  res.json({ message: "Todo API is running" });
});

module.exports = app;