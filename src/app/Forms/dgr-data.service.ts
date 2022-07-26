import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DgrDataService {

  constructor(private _http:HttpClient) { }
  private url:string="http://localhost:3000/";
  private header1:string='Content-type';
  private header2:string='application/json';
  private x=new HttpHeaders().set(this.header1,this.header2);

  private siteInputData;
  addAllDgrSiteInputData(body:Data){
    console.log("service",body);
    this.siteInputData=body;
    return this._http.post("http://localhost:3000/site_input",body,{headers:this.x});
  }
  addAllDgrAvailabilityData(body:Data){
    console.log("service",body);
    this.siteInputData=body;
    return this._http.post("http://localhost:3000/site_input",body,{headers:this.x});
  }
  addAllDgrGrassCuttingReportData(body:Data){
    console.log("service",body);
    this.siteInputData=body;
    return this._http.post("http://localhost:3000/site_input",body,{headers:this.x});
  }
  addAllDgrBlockWiseModuleCleaningData(body:Data){
    console.log("service",body);
    this.siteInputData=body;
    return this._http.post("http://localhost:3000/block_wise_module_cleaning",body,{headers:this.x});
  }
  addAllDgrBreakDownData(body:Data){
    console.log("service",body);
    this.siteInputData=body;
    return this._http.post("http://localhost:3000/breakdown_1",body,{headers:this.x});
  }
  addAllCurtailmentLossesData(body:Data){
    console.log("service",body);
    this.siteInputData=body;
    return this._http.post("http://localhost:3000/curtailment_losses",body,{headers:this.x});
  }
  getAllDgrGrassCuttingReportData(){
    return this._http.get("http://localhost:3000/grass_cutting");;
  }
  getAllDgrSiteInputData(){
    return this._http.get("http://localhost:3000/site_input");;
  }
  getAllDgrAvailabilityData(){
    return this._http.get("http://localhost:3000/availability");;
  }

  getAllDgrBlockWiseModuleCleaningData(){
    return this._http.get("http://localhost:3000/block_wise_module_cleaning");;
  }
  getAllDgrBreakDownData(){
    return this._http.get("http://localhost:3000/breakdown_1");;
  }
  getAllCurtailmentLossesData(){
    return this._http.get("http://localhost:3000/curtailment_losses");;
  }
}
