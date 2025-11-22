import { Router } from 'express';
import flightsController from '../controllers/flightsController.js';
import { flightSchema } from '../validators/flightValidator.js';
import { validate } from '../middlewares/validate.js';

const router = Router();

router.get('/', flightsController.getFlights);
router.get('/:id', flightsController.getFlightById);
router.post('/', validate(flightSchema), flightsController.createFlight);
router.delete("/:id", flightsController.deleteFlight);
router.put("/:id",validate(flightSchema), flightsController.updateFlight);

export default router;
    