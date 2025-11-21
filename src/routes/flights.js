import { Router } from 'express';
import flightsController from '../controllers/flightsController.js';

const router = Router();

router.get('/', flightsController.getFlights);
router.get('/:id', flightsController.getFlightById);
router.post('/', flightsController.createFlight);
router.delete("/:id", flightsController.deleteFlight);
router.put("/:id", flightsController.updateFlight);

export default router;
    