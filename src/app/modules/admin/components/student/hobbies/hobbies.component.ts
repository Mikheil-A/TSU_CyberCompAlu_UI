import {Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';
import {MatSnackBarService} from "../../../../shared/services/mat-snack-bar.service";
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {StudentsService} from "../../../../public/services/students.service";
import {NgxSpinnerService} from "ngx-spinner";



@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnChanges {
  @Input() hobbiesStr: string;
  hobbiesArr: string[] = [];
  aNewHobby: string = '';

  @Output() onHobbiesChange = new EventEmitter<any>();

  requestData: object = {
    'hobby': this.hobbiesArr.toString()
  };


  constructor(private _matSnackBarService: MatSnackBarService,
              private _studentsService: StudentsService,
              private _ngxSpinnerService: NgxSpinnerService,) {
  }

  ngOnChanges() {
    this.hobbiesArr = this.hobbiesStr.split(',');
  }


  onDragAndDrop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.hobbiesArr, event.previousIndex, event.currentIndex);

    this._reAssignRequestData();
    this._studentsService.modifyHobbies(localStorage.getItem('user_id'), this.requestData).subscribe(() => {
      this.onHobbiesChange.emit();
      this._matSnackBarService.openSnackBar('ჰობის ცვლილება შეინახა');
    });
  }

  private _reAssignRequestData(): void {
    this._ngxSpinnerService.show();
    this.requestData['hobby'] = this.hobbiesArr.toString();
  }

  addHobby(): void {
    if (!this.aNewHobby) {
      return;
    }
    this.hobbiesArr.push(this.aNewHobby);
    this.aNewHobby = '';

    this._reAssignRequestData();
    this._studentsService.modifyHobbies(localStorage.getItem('user_id'), this.requestData).subscribe(() => {
      this.onHobbiesChange.emit();
      this._matSnackBarService.openSnackBar('ახალი ჰობი დაემატა');
    });
  }

  removeClickedHobby(index: number): void {
    this.hobbiesArr.splice(index, 1);
    this._reAssignRequestData();
    this._studentsService.modifyHobbies(localStorage.getItem('user_id'), this.requestData).subscribe(() => {
      this.onHobbiesChange.emit();
      this._matSnackBarService.openSnackBar('ჰობი ამოიშალა');
    });
  }
}
