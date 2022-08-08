import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dgr',
  templateUrl: './dgr.component.html',
  styleUrls: ['./dgr.component.css'],
})
export class DgrComponent implements OnInit {
  

  constructor(private _router:Router) { }
  
 selectedPlant:string;
  // dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  

  
  
  ngOnInit(): void {
   this.selectedPlant=localStorage.getItem("plant");
  }

  addStudent() {
    this._router.navigate(['/adddgr']);
  }
  goToCharts() {}

  si_flag:boolean=false;
  av_flag:boolean=false;
  gcr_flag:boolean=false;
  bwmc_flag:boolean=false;
  brd_flag:boolean=false;
  cl_flag:boolean=false;
  onChange(E) {
    let formName=E.value;
    if(formName==="site_input"){
      this.si_flag=true;
      this.av_flag=false;
      this.gcr_flag=false;
      this.bwmc_flag=false;
      this.brd_flag=false;
      this.cl_flag=false;
    }
    else if(formName==="availability")
    {
      this.si_flag=false;
      this.av_flag=true;
      this.gcr_flag=false;
      this.bwmc_flag=false;
      this.brd_flag=false;
      this.cl_flag=false;
    }
    else if(formName==="grass_cutting_report")
    {
      this.si_flag=false;
      this.av_flag=false;
      this.gcr_flag=true;
      this.bwmc_flag=false;
      this.brd_flag=false;
      this.cl_flag=false;
    }
    else if(formName==="block_wise_module_cleaning")
    {
      this.si_flag=false;
      this.av_flag=false;
      this.gcr_flag=false;
      this.bwmc_flag=true;
      this.brd_flag=false;
      this.cl_flag=false;
    }
    else if(formName==="break_down")
    {
      this.si_flag=false;
      this.av_flag=false;
      this.gcr_flag=false;
      this.bwmc_flag=false;
      this.cl_flag=false;
      this.brd_flag=true;
    }
    else if(formName==="curtailment_losses")
    {
      this.si_flag=false;
      this.av_flag=false;
      this.gcr_flag=false;
      this.bwmc_flag=false;
      this.cl_flag=true;
      this.brd_flag=false;
    }
    else{
      console.warn("error in Select")
    }
  }

}
