package com.demo.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.entity.Course;

public interface CourseRepository extends JpaRepository<Course, Integer>{
	List<Course> findByCourseName(String courseName);

}
