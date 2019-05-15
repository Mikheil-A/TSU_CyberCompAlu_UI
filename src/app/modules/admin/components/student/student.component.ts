import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";
import {StudentsService} from "../../../public/services/students.service";



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  private _studentPersonalId: string;


  constructor(private _activatedRoute: ActivatedRoute,
              private _ngxSpinnerService: NgxSpinnerService,
              private _studentsService: StudentsService) {
    // this._ngxSpinnerService.show();
    this._getStudentPersonalId();
  }

  ngOnInit() {
    this._fetchStudentInfo(this._studentPersonalId);
  }


  private _getStudentPersonalId() {
    this._studentPersonalId = this._activatedRoute.snapshot.paramMap.get('pid')
  }

  private _fetchStudentInfo(pid: string) {
    console.log(pid);

    this._studentsService.getStudent(pid).subscribe((res) => {
      console.log(res);
    }, () => {
    }, () => {
      // this._ngxSpinnerService.hide();
    });
  }
}
