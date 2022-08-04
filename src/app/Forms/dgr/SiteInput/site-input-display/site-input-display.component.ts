import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DgrDataService } from 'src/app/Forms/dgr-data.service';



@Component({
  selector: 'app-site-input-display',
  templateUrl: './site-input-display.component.html',
  styleUrls: ['./site-input-display.component.css']
})
export class SiteInputDisplayComponent implements OnInit {
  displayedColumns: string[] = 
  [
    'inverter_reading',
    'meter_reading',
    'auxilary_consumptions',
    'reactive_power_import',
    'peak_power_generated',
    'irradiation',
    'average_frequency',
    'no_of_inverters_with_sy_10_of_average',
    'average_inverter_efficiency',
    'no_of_time_with_forecast_deviation_10',
    'hours_spent_on_pm',
    'hours_spent_on_cm',
    'no_of_cm_notifications_created',
    'no_of_cm_tickets_closed',
    'no_of_cm_tickets_received_from_ronc',
    'soiling_loss',
    'no_of_modules_cleaned',
    'no_of_strings_monitored',
    'module_temp',
    'ambient_temp',
    'wind_speed',
    'no_of_people_entering_plant_premises',
    'irradiation_ghi',
    'tankers_entered_in_plant',
    'capacity_tanker',
    'available_water_in_tanker_exits',
    'gii_wms_01',
    'gii_wms_02',
    'gii_wms_03',
    'sunrise',
    'sunset',
    'tds',
    'rain',
    'installed_dc',
  ];
  constructor(
    
    private _siteInputService: DgrDataService
  ) {
    this.dataSource = new MatTableDataSource();
  }
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
     this._siteInputService
    .getAllDgrSiteInputData()
    .subscribe((siteData: any) => {
      this.dataSource.data = siteData;
    });
    

  console.log(this.dataSource);
  // console.log(this.dataSource.data)
  }
}

  
