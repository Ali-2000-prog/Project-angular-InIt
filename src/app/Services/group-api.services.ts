import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Group } from '../Models/Group.model';


// https://localhost:44312/api/user
@Injectable()
export class GroupApiService {

  constructor(private httpclient: HttpClient){}
  getUsers():Observable<Group[]>{
    return  this.httpclient.get<Group[]>("https://localhost:44312/api/Groups")
  }

  getUser(id:number):Observable<Group>{
    return this.httpclient.get<Group>("https://localhost:44312/api/Groups"+id);
  }
  
}
