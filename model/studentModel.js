import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
    rollNumber: {
        type: String,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    class: {
        type: String,
    },
    subject1: {
        type: String,
    },
    subject2: {
        type: String,
    },
    subject3: {
        type: String,
    },
    admissionYear: {
        type: String,
    }
});

const Student = mongoose.model('Students', studentSchema);
export default Student