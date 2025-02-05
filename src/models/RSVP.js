import mongoose from 'mongoose'

const RSVPSchema = new mongoose.Schema({
    event: { 
        type: mongoose.Schema.Types.ObjectId, ref: "Event" 
    },
    user: { 
        type: mongoose.Schema.Types.ObjectId, ref: "User" 
    },
    status: { 
        type: String, enum: ["going", "not going"], default: "going" 
    }
});

export default mongoose.model("RSVP", RSVPSchema);


