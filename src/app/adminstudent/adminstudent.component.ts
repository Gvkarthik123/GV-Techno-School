import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';

@Component({
  selector: 'app-adminstudent',
  templateUrl: './adminstudent.component.html',
  styleUrls: ['./adminstudent.component.css']
})
export class AdminstudentComponent implements OnInit {

  constructor(private http: Http) { }
  confirmationString:string = "New student has been added";
  isAdded: boolean = false;
  studentObj:object = {};
  addNewStudent = function(student) {
    this.studentObj = {
      "id": student.id,
      "fname": student.fname,
      "lname": student.lname,
      "email": student.email,
      "mob": student.mob
    }
    this.http.post("http://localhost:5555/students/", this.studentObj).subscribe((res:Response) => {
      this.isAdded = true;
    })
  }

  ngOnInit(): void {
  }

}

