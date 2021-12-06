import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
   data:any=[];
   API ='http://localhost:55739'
  constructor(private http:HttpClient) { }
  
  public updateStudents(student: any) {
    return this.http.put(this.API + '/updateStudents', student);
  }

 
}
