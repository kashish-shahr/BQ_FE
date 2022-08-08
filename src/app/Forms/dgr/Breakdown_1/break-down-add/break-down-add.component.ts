import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DgrDataService } from 'src/app/Forms/dgr-data.service';

@Component({
  selector: 'app-break-down-add',
  templateUrl: './break-down-add.component.html',
  styleUrls: ['./break-down-add.component.css']
})
export class BreakDownAddComponent implements OnInit {
  
  
  constructor(private _formBuilder:FormBuilder,private _router:Router,private _siteGrassCuttingService:DgrDataService) { }
  fg_break_down:FormGroup;
  plant:string="";
  ngOnInit(): void {

    this.plant=localStorage.getItem("plant");
    this.fg_break_down=this._formBuilder.group({
    date: new FormControl(null,  ),
    category_of_breakdown_state: new FormControl(null,  ),
    category_of_breakdown_component: new FormControl(null,  ),
    category_sub_component: new FormControl(null,  ),
    block: new FormControl(null,  ),
    asb:new FormControl(null,),
    inverter: new FormControl(null,  ),
    bd_type: new FormControl(null,  ),
    dc_capacity_down_kw: new FormControl(null,  ),
    downtime: new FormControl(null,  ),
    uptime: new FormControl(null,  ),
    totaltime_hrs: new FormControl(null,  ),
    error_code: new FormControl(null,  ),
    sap_breakdown_or_corrective_maintenance_order_no_pw0_11_digit_number: new FormControl(null,  ),
    fault_description: new FormControl(null,  ),
    actiontaken: new FormControl(null,  ),
    other_remarks_if_any: new FormControl(null,  ),
    acc_gii_kwh_or_m2_when_stop: new FormControl(null,  ),
    acc_gii_kwh_or_m2_when_start: new FormControl(null,  ),
    bd_loss_kwh: new FormControl(null,  ),
    })
  }
  
  submitDgrData() {
    let body: any = this.fg_break_down.value;
    this._siteGrassCuttingService.addAllDgrBreakDownData(body);
    this._router.navigate(['']);
  }
}




