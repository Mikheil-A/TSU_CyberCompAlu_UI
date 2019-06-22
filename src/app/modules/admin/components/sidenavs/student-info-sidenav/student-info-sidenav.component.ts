import {Component, Input, OnInit} from '@angular/core';
import {StudentsService} from "../../../../public/services/students.service";


@Component({
  selector: 'app-student-info-sidenav',
  templateUrl: './student-info-sidenav.component.html',
  styleUrls: ['./student-info-sidenav.component.scss']
})
export class StudentInfoSidenavComponent implements OnInit {
  @Input() studentId: string;
  studentInfo: object;


  constructor(private _studentsService: StudentsService) {
  }

  ngOnInit() {
    this._fetchStudent();
  }


  private _fetchStudent() {
    console.log('>>>>>>>>', this.studentId);
    this._studentsService.getStudent(this.studentId).subscribe(res => {
      console.log(res);
      this.studentInfo = res;
    });
  }
}
