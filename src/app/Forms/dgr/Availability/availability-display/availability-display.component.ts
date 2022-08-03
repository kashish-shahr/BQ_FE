import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DgrDataService } from 'src/app/Forms/dgr-data.service';

@Component({
  selector: 'app-availability-display',
  templateUrl: './availability-display.component.html',
  styleUrls: ['./availability-display.component.css']
})
export class AvailabilityDisplayComponent implements OnInit {

  displayedColumns:string[]=[
    "date_day",
"total_operational_minutes_irradiation_greater_than_100_day",
"rmu_number_day",
"rmu_breakdown_minutes_day",
"rmu_breakdown_minutes_irradiation_greater_than_100_day",
"rmu_no_of_effected_inverter_day",
"dt_number_day",
"dt_breakdown_minutes_day",
"dt_breakdown_minutes_irradiation_greater_than_100_day",
"dt_no_of_effected_inverter_day",
"inv_number_day",
"inv_breakdown_minutes_day",
"inv_breakdown_minutes_irradiation_greater_than_100_day",
"scb_breakdown_minutes_day",
"scb_breakdown_minutes_irradiation_greater_than_100_day",
"scb_no_of_strings_day",
"scb_duration_of_connected_to_faulty_inv_dt_rmu_day",
"switchgear_breakdown_minutes_day",
"switchgear_breakdown_minutes_irradiation_greater_than_100_day",
"switchgear_no_of_ffected_inverter_day",
"switchyard_breakdown_duration_minutes_day",
"switchyard_breakdown_minutes_irradiation_greater_than_100_day",
"switchyard_no_of_ffected_inverter_day",
"curtailment_slot_01_set_point_day",
"curtailment_slot_01_time_day",
"curtailment_slot_02_set_point_day",
"curtailment_slot_02_time_day",
"curtailment_slot_03_set_point_day",
"curtailment_slot_03_time_day",
"transmission_line_breakdown_minutes_day",
"transmission_line_breakdown_minutes_irradiation_greater_than_100_day",
"transmission_line_no_of_effected_inverter_day",

  ];
  dataSource: MatTableDataSource<any>;

  constructor(private _dgrDataService:DgrDataService) { 
    this.dataSource = new MatTableDataSource();
  }

  @ViewChild(MatPaginator) paginator:MatPaginator;
  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this._dgrDataService
    .getAllDgrAvailabilityData()
    .subscribe((availabilityData:any)=>{
      console.log(availabilityData)
      this.dataSource.data=availabilityData;
    })
  }

}
