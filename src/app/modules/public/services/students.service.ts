import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";



@Injectable()
export class StudentsService {

  constructor(private _httpClient: HttpClient) {
  }


  search(data: object) {
    return this._httpClient.post('/api/users/list', data);
  }

  addOrUpdate(data: object) {
    return this._httpClient.post('/api/users', data);
  }

  delete(studentId: number) {
    return this._httpClient.delete(`/api/users/${studentId}`);
  }

  getStudent(studentId: string) {
    return this._httpClient.get(`/api/users/${studentId}/edit`);
  }

  addWorkExperience(data: object){
    return this._httpClient.post('/api/usawfefwfer', data);
  }
}
