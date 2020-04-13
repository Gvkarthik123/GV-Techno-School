import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
interface updateObject{
  id:number;
  fname: string;
  lname: string;
  email: string;
  mob: string;
}

@Component({
  selector: 'app-adminupdate',
  templateUrl: './adminupdate.component.html',
  styleUrls: ['./adminupdate.component.css']
})
export class AdminupdateComponent implements OnInit {

  id: number;
  public data: updateObject={
  id:0,
  fname:'',
  lname:'',
  email:'',
  mob:'',
  };
  students = [];
  exist = false;
  studentObj:object = {};
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private router: Router, private route: ActivatedRoute, private http: Http) { }

  updateStudent(student) {
    this.studentObj = {
      "id": student.id,
      "fname": student.fname,
      "lname": student.lname,
      "email": student.email,
      "mob": student.mob
    };
    const url = `${"http://localhost:5555/students"}/${this.id}`;
    this.http.put(url, JSON.stringify(this.studentObj), { headers: this.headers })
      .toPromise()
      .then(() => {
        this.router.navigate(['/admin']);
      })
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.http.get("http://localhost:5555/students").subscribe(
      (res: Response) => {
        this.students = res.json();
        for (var i = 0; i < this.students.length; i++) {
          if (parseInt(this.students[i].id) === this.id) {
            this.exist = true;
            this.data = this.students[i];
            break;
          } else {
            this.exist = false;
          }
        }
      }
    )
  }




}
