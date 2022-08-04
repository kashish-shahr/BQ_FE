import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dgr',
  templateUrl: './dgr.component.html',
  styleUrls: ['./dgr.component.css'],
})
export class DgrComponent implements OnInit {
  

  constructor(private _router:Router) { }
  
 
  // dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  

  
  
  ngOnInit(): void {
   
  }

  addStudent() {
    this._router.navigate(['/adddgr']);
  }
  goToCharts() {}

  si_flag:boolean=false;
  av_flag:boolean=false;
  gcr_flag:boolean=false;
  bwmc_flag:boolean=false;
  onChange(E) {
    let formName=E.value;
    if(formName==="site_input"){
      this.si_flag=true;
      this.av_flag=false;
      this.gcr_flag=false;
      this.bwmc_flag=false;
    }
    else if(formName==="availability")
    {
      this.si_flag=false;
      this.av_flag=true;
      this.gcr_flag=false;
      this.bwmc_flag=false;
    }
    else if(formName==="grass_cutting_report")
    {
      this.si_flag=false;
      this.av_flag=false;
      this.gcr_flag=true;
      this.bwmc_flag=false;
    }
    else if(formName==="block_wise_module_cleaning")
    {
      this.si_flag=false;
      this.av_flag=false;
      this.gcr_flag=false;
      this.bwmc_flag=true;
    }
    else{
      console.warn("error in Select")
    }
  }

}
