import express from "express";
import flightsRoutes from "./routes/flights.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { logger } from "./middlewares/logger.js";

const app = express();
const PORT = 3001;

// Middleware para JSON
app.use(express.json());

// Middleware de logging
app.use(logger);

// Usamos tus rutas reales
app.use("/api/flights", flightsRoutes);

// Middleware de manejo de errores
app.use(errorHandler);


app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});