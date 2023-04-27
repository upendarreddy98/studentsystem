package com.upendarproject.studentsystem.Controller;

import com.upendarproject.studentsystem.Service.StudentService;
import com.upendarproject.studentsystem.model.Student;
import jdk.jfr.ContentType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
    @Autowired
private StudentService studentService;
@PostMapping(value = "/add")
    public String add(@RequestBody Student student)
{
    studentService.saveStudent(student);
    return "New student is added";
}
@GetMapping("/getAll")
    public List<Student>getAllStudents(){
    return studentService.getAllStudents();
}
}
