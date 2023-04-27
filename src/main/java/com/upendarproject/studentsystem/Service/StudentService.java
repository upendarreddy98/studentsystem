package com.upendarproject.studentsystem.Service;

import com.upendarproject.studentsystem.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student>getAllStudents();
}
