import express from "express";
import { addStudent, getStudent, updateStudent, removeStudent } from "../controller/studentConroller.js";
const router = express.Router();

router.get('/getStudent/:rollNo', getStudent);
router.post('/addStudent', addStudent);
router.put('/updateStudent/:rollNo', updateStudent);
router.delete('/removeStudent/:rollNo', removeStudent);

export default router;