package com.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="COURSE")

public class Course {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="course_id")
	private int id;
	@Column(name="course_name", nullable = false)
	private String courseName;
	@Column(name="author_name", nullable = false)
	private String authorName;
	private int duration;
	private String availability;
	
	public Course() {
		
	}

	public Course(int id, String courseName, String authorName, int duration, String availability) {
		super();
		this.id = id;
		this.courseName = courseName;
		this.authorName = authorName;
		this.duration = duration;
		this.availability = availability;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public String getAuthorName() {
		return authorName;
	}

	public void setAuthorName(String authorName) {
		this.authorName = authorName;
	}

	public int getDuration() {
		return duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}

	public String getAvailability() {
		return availability;
	}

	public void setAvailability(String availability) {
		this.availability = availability;
	}
	
	
	
}
