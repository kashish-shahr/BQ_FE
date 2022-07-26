import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './Student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private url:string="http://localhost:3000/";
  private header1:string='Content-type';
  private header2:string='application/json';
  x=new HttpHeaders().set(this.header1,this.header2);
  constructor(private _http:HttpClient) { }
getAllStudents()
{
  
  return this._http.get(this.url,{headers:this.x});
}
addStudent(objBody:any)
{
  let body=JSON.stringify(objBody);
  return this._http.post(this.url,body,{headers:this.x});
}
getStudentbyId(id){
  
  return this._http.get(this.url+id,{headers:this.x});
}
updateStudent(objBody:Student){
  let body=JSON.stringify(objBody);
  return this._http.put(this.url+objBody.Id,objBody,{headers:this.x});
}
deleteStudent(id){
  return this._http.delete(this.url+id,{headers:this.x});
}
}
