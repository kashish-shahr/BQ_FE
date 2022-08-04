import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DgrDataService } from 'src/app/Forms/dgr-data.service';

@Component({
  selector: 'app-block-wise-module-cleaning-add',
  templateUrl: './block-wise-module-cleaning-add.component.html',
  styleUrls: ['./block-wise-module-cleaning-add.component.css']
})
export class BlockWiseModuleCleaningAddComponent implements OnInit {

  constructor(private _formBuilder:FormBuilder,private _router:Router,private _siteGrassCuttingService:DgrDataService) { }
  fg_block_wise_module_cleaning:FormGroup;
  ngOnInit(): void {
    this.fg_block_wise_module_cleaning=this._formBuilder.group({
      block1_sam_wet: new FormControl(null,  ),
      block1_sam_dry: new FormControl(null,  ),
      block1_manual: new FormControl(null,  ),
      block2_sam_wet: new FormControl(null,  ),
      block2_sam_dry: new FormControl(null,  ),
      block2_manual: new FormControl(null,  ),
      block3_sam_wet: new FormControl(null,  ),
      block3_sam_dry: new FormControl(null,  ),
      block3_manual: new FormControl(null,  ),
      block4_sam_wet: new FormControl(null,  ),
      block4_sam_dry: new FormControl(null,  ),
      block4_manual: new FormControl(null,  ),
      block5_sam_wet: new FormControl(null,  ),
      block5_sam_dry: new FormControl(null,  ),
      block5_manual: new FormControl(null,  ),
      block6_sam_wet: new FormControl(null,  ),
      block6_sam_dry: new FormControl(null,  ),
      block6_manual: new FormControl(null,  ),
      block7_sam_wet: new FormControl(null,  ),
      block7_sam_dry: new FormControl(null,  ),
      block7_manual: new FormControl(null,  ),
      block8_sam_wet: new FormControl(null,  ),
      block8_sam_dry: new FormControl(null,  ),
      block8_manual: new FormControl(null,  ),
      block9_sam_wet: new FormControl(null,  ),
      block9_sam_dry: new FormControl(null,  ),
      block9_manual: new FormControl(null,  ),
      block10_sam_wet: new FormControl(null,  ),
      block10_sam_dry: new FormControl(null,  ),
      block10_manual: new FormControl(null,  ),
    })
  }
  submitDgrData() {
    let body: any = this.fg_block_wise_module_cleaning.value;
    // this._siteInputService.addAllDgrData(body).subscribe(data=>{

    // })
    this._siteGrassCuttingService.addAllDgrGrassCuttingReportData(body);
    this._router.navigate(['']);
  }
}




