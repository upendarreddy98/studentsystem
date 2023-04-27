package com.upendarproject.studentsystem.Service;

import com.upendarproject.studentsystem.Repository.StudentRepository;
import com.upendarproject.studentsystem.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService{
  @Autowired
    private StudentRepository studentRepository;
    @Override
    public Student saveStudent(Student student)
    {
        return studentRepository.save(student);
    }

  @Override
  public List< Student > getAllStudents()
  {
    return studentRepository.findAll() ;
  }
}
