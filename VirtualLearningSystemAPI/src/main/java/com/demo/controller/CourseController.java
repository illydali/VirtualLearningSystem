package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.entity.Course;
import com.demo.repository.CourseRepository;



@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class CourseController {
	@Autowired
	private CourseRepository courseRepository;
	
	@GetMapping("/courses")
	public List getCourseList() {
		List<Course> courseList = courseRepository.findAll();
		return courseList;
	}
	
	@GetMapping("/courses/{id}")
	public Course getCourseById(@PathVariable(value = "id") Integer id) {
		Course existingCourse = courseRepository.findById(id).get();
		return existingCourse;
	}
	
	
	@PostMapping("/courses") 
	public Course createCourse(@RequestBody Course course) {
		Course savedCourse = courseRepository.save(course);
		return savedCourse;
	}
	
	@PutMapping("/courses/{id}")
	public Course updateCourse(@PathVariable(value = "id") Integer id, @RequestBody Course course) {
		Course existingCourse = courseRepository.findById(id).get();
		existingCourse.setCourseName(course.getCourseName());
		existingCourse.setAuthorName(course.getAuthorName());
		existingCourse.setAvailability(course.getAvailability());
		existingCourse.setDuration(course.getDuration());
		
		Course saveCourse = courseRepository.save(course);
		return saveCourse;
	}
	
	@DeleteMapping("/courses/{id}") 
	public Course deleteCourse(@PathVariable(value = "id") Integer id) {
		Course existingCourse = courseRepository.findById(id).get();
		courseRepository.delete(existingCourse);
		return existingCourse;
	}

}
