import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../auth/services/auth.service";



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username: string = '';


  constructor(private _authService: AuthService) {
  }

  ngOnInit() {
    if (this._authService.isLoggedIn) {
      this.username = localStorage.getItem('username');
    }
  }


  logout() {
    this._authService.logout();
  }
}
