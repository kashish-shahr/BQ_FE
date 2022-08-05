import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {

  constructor(private _htpp:HttpClient,) { }

  private url="http://localhost:3000/plants";

  getAllPlants(){
    return this._htpp.get(this.url);
  }
}
