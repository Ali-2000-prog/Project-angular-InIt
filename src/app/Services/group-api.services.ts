import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Group } from '../Models/Group.model';




// https://localhost:44312/api/user
@Injectable()
export class GroupApiService {

  constructor(private httpclient: HttpClient){}

  groupslist: any[];

  getUsers():Observable<Group[]>{
    return  this.httpclient.get<Group[]>("http://localhost:5001/api/Groups")
  }

  getUser(id:number):Observable<Group>{
    return this.httpclient.get<Group>("http://localhost:5001/api/Groups"+id);
  }

  CreateGroup(groups):Observable<Group>{
    return this.httpclient.post<Group>('http://localhost:5001/api/Group',groups);
  }
  
  DeleteGroup(id):Observable<Group>{
    return this.httpclient.delete<Group>("http://localhost:5001/api/Group/"+id);
  }
}
