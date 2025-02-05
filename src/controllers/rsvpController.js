import RSVP from "../models/RSVP.js";

export const rsvpEvent = async (req, res) => {
    try {
        const existingRSVP = await RSVP.findOne({ event: req.params.eventId, user: req.user.id });
        if (existingRSVP) return res.status(400).json({ error: "You have already RSVP'd" });

        const rsvp = new RSVP({ event: req.params.eventId, user: req.user.id, status: "going" });
        await rsvp.save();
        res.status(201).json({ message: "RSVP successful" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
