import {Component, OnChanges, Input} from '@angular/core';



@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnChanges {
  @Input() userInfo: object;


  constructor() {
  }

  ngOnChanges() {
    console.log(this.userInfo);
  }
}
