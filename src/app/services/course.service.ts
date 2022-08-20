import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Course } from '../model/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  baseUrl: string = "http://localhost:8080/api/courses";

  constructor( private httpClient: HttpClient) { }

  getCourses() {
    return this.httpClient.get<Course[]>(this.baseUrl);
  }

  getCourseById(id: number) {
    return this.httpClient.get<Course>(this.baseUrl + "/" + id);
  }

  createCourse(course: Course) {
    return this.httpClient.post(this.baseUrl, course);
  }

  updateCourse(id:number, course:any) : Observable<Object> {
    return this.httpClient.put<Course>(`${this.baseUrl}/${id}`, course);
  }

  deleteCourse(id: number) {
    return this.httpClient.delete<Course>(this.baseUrl + "/" + id);
  }
}
