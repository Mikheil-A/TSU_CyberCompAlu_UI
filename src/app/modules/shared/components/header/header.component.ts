import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../auth/services/auth.service";



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username: string = 'test username';


  constructor(private _authService: AuthService) {
  }

  ngOnInit() {
    // TODO get username from local storage
  }


  logout() {
    this._authService.logout();
  }
}
