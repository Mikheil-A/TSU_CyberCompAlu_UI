import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";



@Injectable()
export class AuthService {

  constructor(private _httpClient: HttpClient,
              private _router: Router) {
  }


  login(requestData: { email: string; password: string }) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': '' // empty token at first
    });
    const options: object = {
      headers: headers,
      observe: 'response' // to display the full response including headers
    };

    return this._httpClient.post('/api/auth/login', requestData, options).pipe(
      map(res => {
        console.log(res);
        if (res) {
          this._saveUserSessionData(res['token']);
          return res['body'];
        }
      })
    );
  }

  logout() {
    this._clearUserSessionData();
    this._router.navigate(['auth']);
  }


  private _saveUserSessionData(token) {
    if (token) {
      localStorage.setItem('access_token', token);
    }
  }

  private _clearUserSessionData() {
    localStorage.clear();
  }
}
