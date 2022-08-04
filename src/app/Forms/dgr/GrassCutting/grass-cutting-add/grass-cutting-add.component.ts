import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DgrDataService } from 'src/app/Forms/dgr-data.service';

@Component({
  selector: 'app-grass-cutting-add',
  templateUrl: './grass-cutting-add.component.html',
  styleUrls: ['./grass-cutting-add.component.css']
})
export class GrassCuttingAddComponent implements OnInit {

  constructor(private _formBuilder:FormBuilder,private _router:Router,private _siteGrassCuttingService:DgrDataService) { }
  fg_grasscutting:FormGroup;
  ngOnInit(): void {
    this.fg_grasscutting=this._formBuilder.group({
      grass_cutting_report_daily_in_acres: new FormControl(null,  ),
      grass_cutting_report_mtd_in_acres: new FormControl(null,  ),
      grass_cutting_report_date: new FormControl(null,  )

    })
  }
  submitDgrData() {
    let body: any = this.fg_grasscutting.value;
    // this._siteInputService.addAllDgrData(body).subscribe(data=>{

    // })
    this._siteGrassCuttingService.addAllDgrGrassCuttingReportData(body);
    this._router.navigate(['']);
  }
}
