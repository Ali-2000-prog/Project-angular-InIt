import { EventEmitter, Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/User.model';

// https://localhost:44312/api/user
@Injectable()
export class UserApiService {

  user:User;
  userlist: any[];

  constructor(private httpclient: HttpClient){}
  getUsers():Observable<User[]>{
    return  this.httpclient.get<User[]>("http://localhost:5001/api/user")
  }

  getUser(name:string):Observable<User>{
    return this.httpclient.get<User>("http://localhost:5001/api/user/"+name);
  }

  getUserEmail(email:string):Observable<User>{
    return this.httpclient.get<User>("http://localhost:5001/api/user/email/"+email);
  }

  CreateUser(user):Observable<User>{
    console.log("User:"+user);
    return this.httpclient.post<User>('http://localhost:5001/api/user/add',user);
  }
  
  DeleteUser(uname):Observable<User>{
    return this.httpclient.delete<User>("http://localhost:5001/api/user/"+uname);
  }
  
  UpdateUserPassword(uname,password):Observable<any>{

    return this.httpclient.put("http://localhost:5001/api/user/password/"+uname+"/"+password,uname);
  }
  // "http://localhost:5001/api/user/password/TestUser5/555555"
}
