import mongoose from "mongoose";

const WorkSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    assignTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    work: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: "pending"
    }
});

const Work = mongoose.model('Work', WorkSchema);
export default Work;
