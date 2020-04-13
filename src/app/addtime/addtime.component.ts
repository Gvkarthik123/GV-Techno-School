import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';

@Component({
  selector: 'app-addtime',
  templateUrl: './addtime.component.html',
  styleUrls: ['./addtime.component.css']
})
export class AddtimeComponent implements OnInit {

  constructor(private http: Http) { }
  confirmationString:string = "New Subject has been added";
  isAdded: boolean = false;
  TimetableObj:object = {};
  addNewTimetable = function(Timetable) {
    this.TimetableObj = {
      "id": Timetable.id,
      "day": Timetable.day,
      "period1": Timetable.period1,
      "period2": Timetable.period2,
      "period3": Timetable.period3,
      "period4": Timetable.period4,
      "period5": Timetable.period5,
      "period6": Timetable.period6
    }
    this.http.post("http://localhost:4444/Timetables/", this.TimetableObj).subscribe((res:Response) => {
      this.isAdded = true;
    })
  }


  ngOnInit(): void {
  }

}
