import {Component, OnInit} from '@angular/core';
import {MatSnackBarService} from "../../../../shared/services/mat-snack-bar.service";



@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {
  hobbiesArr: string[] = ['test1', 'test2', 'test3'];
  aNewHobby: string = '';


  constructor(private _matSnackBarService: MatSnackBarService) {
  }

  ngOnInit() {
  }


  addHobby(): void {
    if (!this.aNewHobby) {
      return;
    }
    this.hobbiesArr.push(this.aNewHobby);
    this.aNewHobby = '';
    this._matSnackBarService.openSnackBar('ახალი ჰობი დაემატა');
  }

  removeClickedHobby(index: number): void {
    this.hobbiesArr.splice(index, 1);
    this._matSnackBarService.openSnackBar('ჰობი ამოიშალა');
  }
}
