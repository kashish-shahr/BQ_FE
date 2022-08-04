import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DgrDataService } from 'src/app/Forms/dgr-data.service';

@Component({
  selector: 'app-break-down-display',
  templateUrl: './break-down-display.component.html',
  styleUrls: ['./break-down-display.component.css']
})
export class BreakDownDisplayComponent implements OnInit {
  displayedColumns:string[]=[
    "date",
    "category_of_breakdown_state",
    "category_of_breakdown_component",
    "category_sub_component",
    "block", 
    "inverter",
    "bd_type",
    "dc_capacity_down_kw",
    "downtime",
    "uptime",
    "totaltime_hrs",
    "error_code",
    "sap_breakdown_or_corrective_maintenance_order_no_pw0_11_digit_number",
    "fault_description",
    "actiontaken",
    "other_remarks_if_any",
    "acc_gii_kwh_or_m2_when_stop",
    "acc_gii_kwh_or_m2_when_start",
    "bd_loss_kwh"
  ];
  dataSource: MatTableDataSource<any>;
  constructor(private _dgrDataService:DgrDataService) {
    this.dataSource=new MatTableDataSource();
   }
  @ViewChild(MatPaginator) paginator:MatPaginator;
  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this._dgrDataService
    .getAllDgrBreakDownData()
    .subscribe((breakDownData:any)=>{
      console.log(breakDownData)
      this.dataSource.data=breakDownData;
    })
  }
}