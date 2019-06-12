import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";



@Injectable()
export class StudentsService {

  constructor(private _httpClient: HttpClient) {
  }


  search(data: object) {
    return this._httpClient.get(`/api/users/list?page=${data['page']}&limit=${data['limit']}`);
  }

  add(data: object) {
    return this._httpClient.post('/api/users', data);
  }

  delete(studentId: number) {
    return this._httpClient.delete(`/api/users/${studentId}`);
  }

  getStudent(studentPersonalId: string) {
    return this._httpClient.get(`/api/users/${studentPersonalId}`);
  }
}
