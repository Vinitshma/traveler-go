import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// interface user{
//   name: string;
//   email: string;
//   phoneNumber:number;
// }
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUser(){
    const headers2 = new HttpHeaders({
      'content':'application/json',
      'authenticationToken':'12534',
    });

    const params2 = new HttpParams()
    .set('pageNum', '10')
    .set('pageSize','100');
    return this.http.get('https://jsonplaceholder.typicode.com/users',{headers:headers2, params:params2});
  }
}
