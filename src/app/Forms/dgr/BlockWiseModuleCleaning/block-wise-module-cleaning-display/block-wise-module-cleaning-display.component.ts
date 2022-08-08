import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DgrDataService } from 'src/app/Forms/dgr-data.service';

@Component({
  selector: 'app-block-wise-module-cleaning-display',
  templateUrl: './block-wise-module-cleaning-display.component.html',
  styleUrls: ['./block-wise-module-cleaning-display.component.css']
})
export class BlockWiseModuleCleaningDisplayComponent implements OnInit {
  displayedColumns: string[] = [
    'block1_sam_wet',
    'block1_sam_dry',
    'block1_manual',
  'block2_sam_wet',
    'block2_sam_dry',
    'block2_manual',
    'block3_sam_wet',
    'block3_sam_dry',
    'block3_manual',
    'block4_sam_wet',
    'block4_sam_dry',
    'block4_manual',
    'block5_sam_wet',
    'block5_sam_dry',
    'block5_manual',
    'block6_sam_wet',
    'block6_sam_dry',
    'block6_manual',
    'block7_sam_wet',
    'block7_sam_dry',
    'block7_manual',
    'block8_sam_wet',
    'block8_sam_dry',
    'block8_manual',
    'block9_sam_wet',
    'block9_sam_dry',
    'block9_manual',
    'block10_sam_wet',
    'block10_sam_dry',
    'block10_manual',
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
    .getAllDgrBlockWiseModuleCleaningData()
    .subscribe((blockWiseModuleCleaningData:any)=>{
      console.log(blockWiseModuleCleaningData)
      this.dataSource.data=blockWiseModuleCleaningData;
    })
  }
}
