import express from "express"
import { rsvpEvent } from "../controllers/rsvpController.js";
const router = express.Router();

router.post("/:eventId", rsvpEvent);

export default router
