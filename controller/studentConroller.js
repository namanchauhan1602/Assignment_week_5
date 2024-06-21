import asyncHandler from "express-async-handler";
import Student from "../model/studentModel.js";

const addStudent = asyncHandler(async (req, res) => {
    let studentDetails = Student(req.body);
    console.log(studentDetails.rollNumber);
    let anySudent = await Student.findOne({ rollNumber: studentDetails.rollNumber })
    if (!anySudent) {
        await Student.create(studentDetails);
        res.send("Student added")
    } else {
        res.send("Student with this roll number already exists");
    }
});

const getStudent = asyncHandler(async (req, res) => {
    let rollNo = req.params.rollNo;
    console.log(rollNo);
    let studentdetails = await Student.findOne({ "rollNumber": req.params.rollNumber });
    if(studentdetails){
        res.send(studentdetails);
    }else{
        res.send("Student details not found")
    }
});

const updateStudent = asyncHandler(async (req, res) => {
    let studentDetails = Student.findOne({ rollNumber: req.params.rollNo });
    if (!studentDetails) {
        res.send("Student details not found");
    } else {
        await Student.findOneAndUpdate({ rollNumber: req.params.rollNo }, {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            class: req.body.class,
            subject1: req.body.subject1,
            subject2: req.body.subject2,
            subject3: req.body.subject3,
            admissionYear: req.body.admissionYear,
        });
        res.send("Student details updated");
    }
});

const removeStudent = asyncHandler(async (req, res) => {
    let studentDetails = Student.findOne({ rollNumber: req.params.rollNo });
    if (!studentDetails) {
        res.send("Student details not found");
    } else {
        await Student.findOneAndDelete({ rollNumber: req.params.rollNo });
        res.send("Student details removed");
    }
});

export { addStudent, getStudent, updateStudent, removeStudent };