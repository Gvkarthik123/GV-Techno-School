import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AdminstudentComponent } from './adminstudent/adminstudent.component';
import { AdminupdateComponent } from './adminupdate/adminupdate.component';
import { StudentComponent } from './student/student.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ProfileComponent } from './profile/profile.component';
import { TimetableComponent } from './timetable/timetable.component';
import { AddtimeComponent } from './addtime/addtime.component';
import { UpdatetimeComponent } from './updatetime/updatetime.component';
import { StudentloginpageComponent } from './studentloginpage/studentloginpage.component';
import { StuprofileComponent } from './stuprofile/stuprofile.component';
const routes: Routes = [
  { path: '', component:NavbarComponent},    
  { path: 'login',  component:LoginComponent},
  { path: 'register', component:RegisterComponent},
  { path: 'admin', component:AdminComponent},
  { path: 'contact', component:ContactComponent},
  { path: 'about', component:AboutComponent},
  { path: 'adminstudent', component: AdminstudentComponent},
  { path: 'adminupdate/:id', component: AdminupdateComponent},
  { path: 'student', component: StudentComponent},
  { path: 'app', component: AppComponent},
  { path: 'loginpage', component:LoginpageComponent },
  { path: 'profile', component:ProfileComponent},
  { path: 'timetable', component:TimetableComponent},
  { path: 'addtime', component:AddtimeComponent},
  { path: 'updatetime/:id', component:UpdatetimeComponent},
  { path: 'studentloginpage', component:StudentloginpageComponent},
  { path: 'stuprofile', component:StuprofileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
