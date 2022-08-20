import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../model/course.model';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent implements OnInit {

  courses? : Course[];
  // filteredCourses?: any[];
  filterBy!: string;
  searchText="";

  constructor(
    private courseService: CourseService,
    private router: Router
  ) { this.courseService = courseService }

  // ngOnInit(): void {
  //   this.courseService.getCourses().subscribe(
  //     (courseInfo) => { 
  //       this.courses = courseInfo,
  //       this.filteredCourses = [...this.courses];
  //     }
  //   )
  // }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(
      (courseInfo) => 
        this.courses = courseInfo,
      
    )
  }

  // filter() {
  //   this.filteredCourses = [...this.courses!.filter
  //   (c => c.courseName.includes(this.filterBy))];
  // }

  deleteCourse(courseToDelete: Course) : void {
    this.courseService.deleteCourse(courseToDelete.id).subscribe(
      (del) => this.courses = this.courses?.filter((c) => c != courseToDelete)
    )
  }

  updateCourse(id:number) {
    this.router.navigate(['update', id]);
  }

}
