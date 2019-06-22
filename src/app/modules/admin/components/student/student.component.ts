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
  private _studentId: string;


  constructor(private _activatedRoute: ActivatedRoute,
              private _ngxSpinnerService: NgxSpinnerService,
              private _studentsService: StudentsService) {
    this._ngxSpinnerService.show();
    this._getStudentId();
  }

  ngOnInit() {
    this._fetchStudentInfo(this._studentId);
  }


  private _getStudentId() {
    this._studentId = this._activatedRoute.snapshot.paramMap.get('id')
  }

  private _fetchStudentInfo(id: string) {
    this._studentsService.getStudent(id).subscribe((res) => {
      console.log(res);
    }, () => {
    }, () => {
      this._ngxSpinnerService.hide();
    });
  }
}
