import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../model/course.model';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {

  id!: number;
  course!: Course;
  // updateForm!: FormGroup;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.course = new Course();
    this.courseService.getCourseById(this.id).subscribe(
      searchById => {
        console.log(searchById)
        this.course = searchById;
      },
      error => {
        console.log("not found" + error);
      }
    );
    // if using Reactive form later
    // this.updateForm = this.formBuilder.group({
    //   id: [],
    //   courseName: [],
    //   authorName: [],
    //   duration: [],
    //   availability: [],

    // })
  }

  updateCourse() {
    this.courseService.updateCourse(this.id, this.course).subscribe(
      (data) => {
        return console.log(data), this.backToCourses()
      }
    );
    // this.course = new Course();
  }

  backToCourses() {
    this.router.navigate(['/courses']);
  }

}
