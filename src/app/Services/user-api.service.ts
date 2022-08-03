import { EventEmitter, Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/User.model';

// https://localhost:44312/api/user
@Injectable()
export class UserApiService {

  user:User;


  constructor(private httpclient: HttpClient){}
  getUsers():Observable<User[]>{
    return  this.httpclient.get<User[]>("http://localhost:5001/api/user")
  }

  getUser(name:string):Observable<User>{
    return this.httpclient.get<User>("http://localhost:5001/api/user/"+name);
  }

  CreateUser(user):Observable<User>{
    console.log("User:"+user);
    return this.httpclient.post<User>('http://localhost:5001/api/user/add',user);
  }
  
}
