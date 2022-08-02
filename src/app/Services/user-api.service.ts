import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/User.model';

// https://localhost:44312/api/user
@Injectable()
export class UserApiService {

  constructor(private httpclient: HttpClient){}
  getUsers():Observable<User[]>{
    return  this.httpclient.get<User[]>("https://localhost:44312/api/user")
  }

  getUser(name:string):Observable<User>{
    return this.httpclient.get<User>("https://localhost:44312/api/user/"+name);
  }
  
}
