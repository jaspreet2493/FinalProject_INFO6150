import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:3000/user/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, password: string,role:string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      role,
      password
    }, httpOptions);
  }
  confirmPayment(token:any, amount:any ): Observable<any> {
    console.log("213");
    return this.http.post(AUTH_API + 'payment', {
      token,
      amount
    }, httpOptions);
  }
}
