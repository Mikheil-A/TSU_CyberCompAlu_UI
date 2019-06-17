import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {Router} from "@angular/router";
import {throwError} from "rxjs";



@Injectable()
export class AuthService {

  constructor(private _httpClient: HttpClient,
              private _router: Router) {
  }


  login(requestData: { email: string; password: string }) {
    const headers = new HttpHeaders({
      // 'Content-Type': 'application/json'
      // 'Authorization': '' // empty token at first
    });
    const options: object = {
      // headers: headers,
      observe: 'response' // to display the full response including headers
    };

    // requestData = {
    //   "email": "giorgi.nikolaishvili25@gmail.com",
    //   "password": "gigi25"
    // };

    return this._httpClient.post('/api/auth/login', requestData, options).pipe(
      map(res => {
        if (res['status'] === 200) {
          // TODO username????
          this._saveUserSessionData(res['body'].token, res['body']['user_id']);
          return res['body'];
        }
      }),
      catchError(this._handleUnauthorizedError())
    );
  }

  logout() {
    this._clearUserSessionData();
    this._router.navigate(['auth']);
  }

  private _handleUnauthorizedError() {
    return (errorResponse: any) => {
      if (errorResponse.status === 401) {
        // "Unauthorized" error
        this.logout();
      }
      return throwError(errorResponse.error);
    };
  }

  private _saveUserSessionData(token: string, userId: number) {
    if (token && userId) {
      localStorage.setItem('access_token', token);
      localStorage.setItem('user_id', userId.toString());
    }
  }

  private _clearUserSessionData() {
    localStorage.clear();
  }
}
