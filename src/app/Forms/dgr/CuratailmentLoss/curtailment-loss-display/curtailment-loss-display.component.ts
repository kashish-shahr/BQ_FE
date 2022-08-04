import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DgrDataService } from 'src/app/Forms/dgr-data.service';

@Component({
  selector: 'app-curtailment-loss-display',
  templateUrl: './curtailment-loss-display.component.html',
  styleUrls: ['./curtailment-loss-display.component.css']
})
export class CurtailmentLossDisplayComponent implements OnInit {

  displayedColumns:string[]=[
    // "plant",
"date",
"time",
"total_ac_power_meter_reading",
"irradiation",
"dc",
"pr",
  ];
  dataSource: MatTableDataSource<any>;
  constructor(private _dgrDataService:DgrDataService) {
    this.dataSource=new MatTableDataSource();
   }
  @ViewChild(MatPaginator) paginator:MatPaginator;
  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
  }
  plant:string="";
  ngOnInit(): void {
    this._dgrDataService
    .getAllCurtailmentLossesData()
    .subscribe((curtailmentData:any)=>{
      this.plant=curtailmentData[0].plant;
      console.log(curtailmentData)
      this.dataSource.data=curtailmentData;
    })
  }
}