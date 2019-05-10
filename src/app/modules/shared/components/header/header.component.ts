import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username: string = 'test';


  constructor(private _router: Router) {
  }

  ngOnInit() {
  }


  logout() {
    this._router.navigate(['auth']);
  }
}