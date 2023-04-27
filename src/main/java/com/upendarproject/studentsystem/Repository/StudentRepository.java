package com.upendarproject.studentsystem.Repository;

import com.upendarproject.studentsystem.model.Student;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository< Student, Integer >
{

}
