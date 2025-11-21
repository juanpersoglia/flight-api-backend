import express from "express";
import flightsRoutes from "./routes/flights.js";

const app = express();
const PORT = 3001;

// Middleware para JSON
app.use(express.json());

// Usamos tus rutas reales
app.use("/api/flights", flightsRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});