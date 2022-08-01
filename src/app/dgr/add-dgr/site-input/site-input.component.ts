import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Data, Router } from '@angular/router';
import { DgrDataService } from 'src/app/Forms/dgr-data.service';


@Component({
  selector: 'app-site-input',
  templateUrl: './site-input.component.html',
  styleUrls: ['./site-input.component.css']
})
export class SiteInputComponent implements OnInit {
  constructor(
    private _siteInputService: DgrDataService,
    private _formBuilder: FormBuilder,
    private _router:Router
  ) {}
  fg_siteInput: FormGroup;
  ngOnInit(): void {
    this.fg_siteInput = this._formBuilder.group({
      inverter_reading: new FormControl(null,  ),
      meter_reading: new FormControl(null,  ),
      auxilary_consumptions: new FormControl(null,  ),
      reactive_power_import: new FormControl(null,  ),
      peak_power_generated: new FormControl(null,  ),
      irradiation : new FormControl(null,  ),
      average_frequency : new FormControl(null,  ),
      no_of_inverters_with_sy_10_of_average : new FormControl(null,  ),
      average_inverter_efficiency : new FormControl(null,  ),
      no_of_time_with_forecast_deviation_10 : new FormControl(null,  ),
      hours_spent_on_pm : new FormControl(null,  ),
      hours_spent_on_cm : new FormControl(null,  ),
      no_of_cm_notifications_created : new FormControl(null,  ),
      no_of_cm_tickets_closed : new FormControl(null,  ),
      no_of_cm_tickets_received_from_ronc : new FormControl(null,  ),
      soiling_loss : new FormControl(null,  ),
      no_of_modules_cleaned : new FormControl(null,  ),
      no_of_strings_monitored : new FormControl(null,  ),
      module_temp : new FormControl(null,  ),
      ambient_temp : new FormControl(null,  ),
      wind_speed : new FormControl(null,  ),
      no_of_people_entering_plant_premises : new FormControl(null,  ),
      irradiation_ghi : new FormControl(null,  ),
      tankers_entered_in_plant : new FormControl(null,  ),
      capacity_Tanker : new FormControl(null,  ),
      available_water_in_tanker_exits : new FormControl(null,  ),
      gii_wms_01 : new FormControl(null,  ),
      gii_wms_02 : new FormControl(null,  ),
      gii_wms_03 : new FormControl(null,  ),
      sunrise : new FormControl(null,  ),
      sunset : new FormControl(null,  ),
      tds : new FormControl(null,  ),
      rain : new FormControl(null,  ),
      installed_dc : new FormControl(null,  ),
    });
  }

 	
  submitDgrData() {
    let body: Data = this.fg_siteInput.value;
    // this._siteInputService.addAllDgrData(body).subscribe(data=>{

    // })
    this._siteInputService.addAllDgrData(body);
    this._router.navigate(['']);
  }
}
