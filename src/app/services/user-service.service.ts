import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from '../Model/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getUsers() {
  return this.http.get<User[]>(this.baseUrl);
  }


  createUser(user: any) {
    return this.http.post<User>(this.baseUrl, user);
  }

  login(email: string, password: string) {
    return this.http
      .get<User[]>(`${this.baseUrl}?email=${email}&password=${password}`)
      .pipe(map(users => users[0] || null)); // Retorna só um ou null
  }
}