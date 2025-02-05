import Event from "../models/Events.js";

export const createEvent = async (req, res) => {
    try {
        const event = new Event({ ...req.body, organizer: req.user.id });
        await event.save();
        res.status(201).json(event);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getEvents = async (req, res) => {
    try {
        const events = await Event.find().populate("organizer", "name");
        res.json(events);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
