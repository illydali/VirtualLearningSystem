import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  addNew!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private courseService: CourseService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.addNew = this.formBuilder.group({
      id: [],
      courseName: [],
      authorName: [],
      duration: [],
      availability: [],

    })
  }

  saveCourse() {
    console.log(this.addNew.value)

    this.courseService.createCourse(this.addNew.value).subscribe(
      (data) => {
        return console.log("new data added", data)
      }
    )
   
    this.router.navigate(['/courses'])
  }

}
