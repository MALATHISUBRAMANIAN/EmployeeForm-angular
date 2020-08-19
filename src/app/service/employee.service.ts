import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url = 'http://localhost:8081/employee/';
  private url = "http://localhost:8081/user/";

  constructor(private http: HttpClient) { }

  onSubmit(value): Observable<any> {
    return this.http.post(`${this._url}` + 'registerEmployeeDetails', value)
  }

  registerUser(value): Observable<any> {
    return this.http.post(`${this.url}` + 'addUser', value);
  }

  loginUser(value): Observable<any> {
    return this.http.post(`${this.url}` + 'login', value);
  }

  getEmployee(id): Observable<any> {
    return this.http.get(`${this._url}` + 'getEmployee/' + id);

  }

}

