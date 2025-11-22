import fs from 'fs';
import crypto from "crypto";
import { pool } from "../db/index.js";

async function getAllFlights() {
  const flights = await pool.query("SELECT * FROM flights");
  return flights.rows;
}

// Helper para GUARDAR
function saveFlights(flights) {
  fs.writeFileSync(flights, JSON.stringify(flights, null, 2));
}

async function getFlightById(id) {
  return flights.find(f => f.id === id) || null;
}

function createFlight(data) {

  const newFlight = {
    ...data,
    id: crypto.randomUUID(),
  };

  flights.push(newFlight);
  saveFlights(flights);

  return newFlight;
}

function deleteFlight(id) {
  const index = flights.findIndex(f => f.id === id);

  if (index === -1) return false;

  flights.splice(index, 1);
  saveFlights(flights);

  return true;
}

function updateFlight(id, newData) {
  const index = flights.findIndex(f => f.id === id);

  if (index === -1) return null;

  const updated = {
    ...flights[index],
    ...newData,
    id,
  };

  flights[index] = updated;

  saveFlights(flights);

  return updated;
}

export default {
  getAllFlights,
  getFlightById,
  createFlight,
  deleteFlight,
  updateFlight
};
