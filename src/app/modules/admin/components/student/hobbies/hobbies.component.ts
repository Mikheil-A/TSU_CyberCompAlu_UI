import {Component, OnInit} from '@angular/core';
import {MatSnackBarService} from "../../../../shared/services/mat-snack-bar.service";
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {StudentsService} from "../../../../public/services/students.service";



@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {
  hobbiesArr: string[] = [];
  aNewHobby: string = '';

  requestData: object = {
    'id': 3,
    'hobbies': this.hobbiesArr.toString()
  };


  constructor(private _matSnackBarService: MatSnackBarService,
              private _studentsService: StudentsService) {
  }

  ngOnInit() {
    const testInputArr: string = ['test1', 'test2', 'test3', 'test4'].toString();
    this.hobbiesArr = testInputArr.split(',');
  }


  onDragAndDrop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.hobbiesArr, event.previousIndex, event.currentIndex);

    this._reAssignRequestData();
    this._studentsService.modifyHobbies(this.requestData).subscribe(() => {
      this._matSnackBarService.openSnackBar('ჰობის ცვლილება შეინახა');
    });
  }

  private _reAssignRequestData(): void {
    this.requestData['hobbies'] = this.hobbiesArr.toString();
  }

  addHobby(): void {
    if (!this.aNewHobby) {
      return;
    }
    this.hobbiesArr.push(this.aNewHobby);
    this.aNewHobby = '';

    this._reAssignRequestData();
    this._studentsService.modifyHobbies(this.requestData).subscribe(() => {
      this._matSnackBarService.openSnackBar('ახალი ჰობი დაემატა');
    });
  }

  removeClickedHobby(index: number): void {
    this.hobbiesArr.splice(index, 1);
    this._reAssignRequestData();
    this._studentsService.modifyHobbies(this.requestData).subscribe(() => {
      this._matSnackBarService.openSnackBar('ჰობი ამოიშალა');
    });
  }
}
