import mongoose from "mongoose";
const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb+srv://crud:Admin@crudapp.rwqdosb.mongodb.net/?retryWrites=true&w=majority&appName=crudApp");
        console.log("Database Connected to Our Application Successfully!");
    } catch (err) {
        console.error("Error" + err.message);
    }
};

export default dbConnect;