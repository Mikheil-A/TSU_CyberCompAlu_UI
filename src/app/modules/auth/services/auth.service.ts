import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";



@Injectable()
export class AuthService {

  constructor(private _httpClient: HttpClient) {
  }


  login(requestData: object) {
    return this._httpClient.post('/api/auth/login', requestData);
  }

  logout() {
    this._clearUserSessionData();
  }


  saveUserSessionData(token) {
    if (token) {
      localStorage.setItem('access_token', token);
    }
  }

  private _clearUserSessionData() {
    localStorage.clear();
  }
}
