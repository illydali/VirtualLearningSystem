import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  addNew!: FormGroup;
  availability: any = ['Today', 'Available', 'Tomorrow'];
  isSubmitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private courseService: CourseService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.addNew = this.formBuilder.group({
      id: [],
      courseName: ["", Validators.required],
      authorName: [],
      duration: [],
      availability: ["", Validators.required], 
      ava: [],

    })
  }

  changeAvail(e:any) {
    this.addNew.controls['availability']
    .setValue(e.target.value, {
      onlySelf: true,
    })
  }

  get avail() {
    return this.addNew.get('availability');
  }

  saveCourse() {
    console.log(this.addNew.value)
    this.isSubmitted = true;
    this.courseService.createCourse(this.addNew.value).subscribe(
      (data) => {
        return console.log("new data added", data), this.backToCourses()
      }
    )
   
    // this.router.navigate(['/courses'])
  }

  // by calling a function to redirect, it will go to 
  // get all data and go to course list page ?
  backToCourses() {
    this.router.navigate(['/courses']);
  }

}
