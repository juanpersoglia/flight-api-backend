import fs from 'fs';
import path from 'path';
import { fileURLToPath } from "url";
import crypto from "crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '../../data/flights.json');

// Helper para LEER el archivo siempre fresco
function loadFlights() {
  const json = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(json);
}

// Helper para GUARDAR
function saveFlights(flights) {
  fs.writeFileSync(filePath, JSON.stringify(flights, null, 2));
}

function getAllFlights() {
  return loadFlights();
}

function getFlightById(id) {
  const flights = loadFlights();
  return flights.find(f => f.id === id) || null;
}

function createFlight(data) {
  const flights = loadFlights();

  const newFlight = {
    ...data,
    id: crypto.randomUUID(),
  };

  flights.push(newFlight);
  saveFlights(flights);

  return newFlight;
}

function deleteFlight(id) {
  const flights = loadFlights();
  const index = flights.findIndex(f => f.id === id);

  if (index === -1) return false;

  flights.splice(index, 1);
  saveFlights(flights);

  return true;
}

function updateFlight(id, newData) {
  const flights = loadFlights();
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
