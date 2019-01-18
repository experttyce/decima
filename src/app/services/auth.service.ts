import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import * as jwtDecode from "jwt-decode";
interface Data {
  access_token: string;
}

interface TokenDto {
  exp: number;
  iat: number;
}

interface User {
  success: boolean;
  data?: {
    access_token: string;
    token_type: string;
    expires_in: number;
    user:{
      id:number,
      username: string,
      email: string,
      created_on:{
        date: string,
        timezone_type: number,
        timezone: string
      }
      last_login:{
        date: string,
        timezone_type: number,
        timezone: string
      }
      active: number;
      first_name: string;
      last_name: string;
      company: string;
      phone: string;
    }
  },
  error?:string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  data: Data ;
  constructor(private http: HttpClient) { }
  getToken(): string {
    const currentUser = localStorage.getItem('currentUser');
    this.data = JSON.parse(currentUser);
    if (this.data == null)
      return '';
    return this.data.access_token;
  }
  setToken(storageName:string, data: string): void {
    localStorage.setItem(storageName, data);
  }
  getTokenExpirationDate(token: string): Date {
    const decoded = jwtDecode<TokenDto>(token);

    if (decoded.exp === undefined) return null;
    const date = new Date(0); 
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if(!token) token = this.getToken();
    if(!token) return true;
    const date = this.getTokenExpirationDate(token);
    console.log(date);
    if(date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }

  login(username: string, password: string) {
    return this.http
      .post<User>(`${environment.baseUrl}/auth/login`, {
        email: username,
        password: password
      })
      .pipe(map(res => {
          // login successful if there's a jwt token in the response
          if (res.data.user && res.data.access_token) {
            // store verifyuser details and jwt token in local storage to keep verifyuser logged in between page refreshes
            //localStorage.setItem('currentUser', JSON.stringify(res.data));
            this.setToken('currentUser', JSON.stringify(res.data));
          }
          return res.data.user;
        }));
  }

  logout() {
    // remove verifyuser from local storage to log verifyuser out
    localStorage.removeItem('currentUser');
  }
}
