import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UpdateCourseComponent } from './update-course/update-course.component';

const routes: Routes = [
  // { path: '', component:}
  { path: '', component: LoginComponent },
  { path: 'courses', component: AllCoursesComponent, canActivate:[AuthGuardService]},
  { path: 'add', component: AddCourseComponent,canActivate:[AuthGuardService]},
  { path: 'update/:id', component: UpdateCourseComponent, canActivate:[AuthGuardService]},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'logout', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
