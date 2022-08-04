import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DgrDataService } from 'src/app/Forms/dgr-data.service';

@Component({
  selector: 'app-curtailment-loss-add',
  templateUrl: './curtailment-loss-add.component.html',
  styleUrls: ['./curtailment-loss-add.component.css']
})
export class CurtailmentLossAddComponent implements OnInit {

  constructor(private _formBuilder:FormBuilder,private _router:Router,private _siteGrassCuttingService:DgrDataService) { }
  fg_curtailment_losses:FormGroup;
  ngOnInit(): void {
    this.fg_curtailment_losses=this._formBuilder.group({
      plant:new FormControl(null,),
      date:new FormControl(null,),
      time:new FormControl(null,),
      total_ac_power_meter_reading:new FormControl(null,),
      irradiation:new FormControl(null,),
      dc:new FormControl(null,),
      pr:new FormControl(null,)
    
    })
  }
  
  submitDgrData() {
    let body: any = this.fg_curtailment_losses.value;
    this._siteGrassCuttingService.addAllCurtailmentLossesData(body);
    this._router.navigate(['']);
  }
}




