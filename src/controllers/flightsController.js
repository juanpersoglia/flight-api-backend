import flightsService from '../services/flightsService.js';

//GET
async function getFlights(req, res) {
  try {
    const flights = await flightsService.getAllFlights();
    res.json(flights);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

//GET by ID
function getFlightById(req, res) {
  const id = req.params.id;

  const flight = flightsService.getFlightById(id);

  if (!flight) {
    return res.status(404).json({ error: 'Vuelo no encontrado' });
  }

  res.json(flight);
}

//POST
function createFlight(req, res) {
  const newFlight = flightsService.createFlight(req.body);
  res.status(201).json(newFlight);
}

//DELETE
function deleteFlight(req, res) {
  const { id } = req.params;
  const success = flightsService.deleteFlight(id);

  if (!success) {
    return res.status(404).json({ message: "Flight not found" });
  }

  res.status(204).send(); // No content
}

//PUT
function updateFlight(req, res) {
  const { id } = req.params;
  const updated = flightsService.updateFlight(id, req.body);

  if (!updated) {
    return res.status(404).json({ message: "Flight not found" });
  }

  res.json(updated);
}

export default {
  getFlights,
  getFlightById,
  createFlight,
  deleteFlight,
  updateFlight
};
