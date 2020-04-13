import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private http: Http) { }
  id:number;
  private headers = new Headers({ 'Content-Type': 'application/json'});
  students = [];
  fetchData = function() {
    this.http.get("http://localhost:5555/students").subscribe(
      (res: Response) => {
        this.students = res.json();
      }
    )
  }

  deleteStudent = function(id) {
    if(confirm("Are you sure?")) {
      const url = `${"http://localhost:5555/students"}/${id}`;
      return this.http.delete(url, {headers: this.headers}).toPromise()
        .then(() => {
        this.fetchData();
        })
    }
  }

  ngOnInit() {
    this.fetchData();
  }

}
