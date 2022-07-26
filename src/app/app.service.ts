import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private url:string="http://localhost:3000/";
  private header1:string='Content-type';
  private header2:string='application/json';
  constructor(private _http:HttpClient) { }
getAllStudents()
{
  
  let x=new HttpHeaders().set(this.header1,this.header2);
  return this._http.get(this.url,{headers:x});
}
addStudent(objBody:any)
{
  let x=new HttpHeaders().set(this.header1,this.header2);
  let body=JSON.stringify(objBody);
  console.log(body);
  return this._http.post(this.url,body,{headers:x});
}

}
