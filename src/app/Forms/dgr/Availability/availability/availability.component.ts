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
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent implements OnInit {
   toggle:boolean=true;
  constructor(
    private _siteInputService: DgrDataService,
    private _formBuilder: FormBuilder,
    private _router:Router
    
  ) {}
  fg_availability_day: FormGroup;
  fg_availability_night: FormGroup;
  dayToggle:boolean=false;
  nightToggle:boolean=false;
  ngOnInit(): void {
    this.fg_availability_day = this._formBuilder.group({
      date_day: new FormControl(null,  ),
      total_operational_minutes_irradiation_greater_than_100_day: new FormControl(null,  ),
      rmu_number_day: new FormControl(null,  ),
      rmu_breakdown_minutes_day: new FormControl(null,  ),
      rmu_breakdown_minutes_irradiation_greater_than_100_day: new FormControl(null,  ),
      rmu_no_of_effected_inverter_day : new FormControl(null,  ),

      dt_number_day : new FormControl(null,  ),
      dt_breakdown_minutes_day : new FormControl(null,  ),
      dt_breakdown_minutes_irradiation_greater_than_100_day : new FormControl(null,  ),
      dt_no_of_effected_inverter_day : new FormControl(null,  ),
      
      inv_number_day : new FormControl(null,  ),
      inv_breakdown_minutes_day : new FormControl(null,  ),
      inv_breakdown_minutes_irradiation_greater_than_100_day : new FormControl(null,  ),
      
      scb_breakdown_minutes_day : new FormControl(null,  ),
      scb_breakdown_minutes_irradiation_greater_than_100_day : new FormControl(null,  ),
      scb_no_of_strings_day : new FormControl(null,  ),
      scb_duration_of_connected_to_faulty_inv_dt_rmu_day : new FormControl(null,  ),

      switchgear_breakdown_minutes_day : new FormControl(null,  ),
      switchgear_breakdown_minutes_irradiation_greater_than_100_day : new FormControl(null,  ),
      switchgear_no_of_ffected_inverter_day : new FormControl(null,  ),

      switchyard_breakdown_duration_minutes_day : new FormControl(null,  ),
      switchyard_breakdown_minutes_irradiation_greater_than_100_day : new FormControl(null,  ),
      switchyard_no_of_ffected_inverter_day : new FormControl(null,  ),

      curtailment_slot_01_set_point_day : new FormControl(null,  ),
      curtailment_slot_01_time_day : new FormControl(null,  ),
      curtailment_slot_02_set_point_day : new FormControl(null,  ),
      curtailment_slot_02_time_day : new FormControl(null,  ),
      curtailment_slot_03_set_point_day : new FormControl(null,  ),
      curtailment_slot_03_time_day : new FormControl(null,  ),

      transmission_line_breakdown_minutes_day : new FormControl(null,  ),
      transmission_line_breakdown_minutes_irradiation_greater_than_100_day : new FormControl(null,  ),
      transmission_line_no_of_effected_inverter_day : new FormControl(null,  ),
      
    });
    this.fg_availability_night = this._formBuilder.group({

      date_night: new FormControl(null,  ),
    
      rmu_number_night: new FormControl(null,  ),
      rmu_breakdown_minutes_night: new FormControl(null,  ),
    
      rmu_no_of_effected_inverter_night : new FormControl(null,  ),

      dt_number_night : new FormControl(null,  ),
      dt_breakdown_minutes_night : new FormControl(null,  ),
      
      scb_breakdown_minutes_night : new FormControl(null,  ),
      
      scb_duration_of_connected_to_faulty_inv_dt_rmu_night : new FormControl(null,  ),

      hundred_percent_bay_1_night : new FormControl(null,  ),

      transmission_line_breakdown_minutes_night : new FormControl(null,  ),
      total_operational_minutes_irradiation_greater_than_100_night : new FormControl(null,  ),
      

      inv_number_night : new FormControl(null,  ),
      inv_breakdown_minutes_night : new FormControl(null,  ),
      
    });
  }
  onChange(x){
  console.log("c,",x.value);
  if(x.value=="day"){
    this.dayToggle=true;
    this.nightToggle=false;
  }
  else if
  (x.value=="night")
  {
    this.dayToggle=false;
    this.nightToggle=true;
  }
  else{
    console.log("ava.html -> error",x)
  }
  }
 	
  submitAvailabilityData_day() {
    let body: Data = this.fg_availability_day.value;
    // this._siteInputService.addAllDgrData(body).subscribe(data=>{

    // })
    // this._siteInputService.addAllDgrData(body);
    // this._router.navigate(['']);
    console.log(body)
  }
  submitAvailabilityData_night() {
    let body: Data = this.fg_availability_night.value;
    // this._siteInputService.addAllDgrData(body).subscribe(data=>{

    // })
    // this._siteInputService.addAllDgrData(body);
    // this._router.navigate(['']);
    console.log(body)
  }
}
