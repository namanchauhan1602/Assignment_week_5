import express from "express";
import dbConnect from "./config/dbConfig.js";
import studentRoutes from './routes/studentRoutes.js'
import cors from 'cors';
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

dbConnect();

app.use('/student', studentRoutes);

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.listen(PORT, () => {
    console.log(`Server started at port number ${PORT}`);
});