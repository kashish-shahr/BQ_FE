import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DgrDataService } from 'src/app/Forms/dgr-data.service';

@Component({
  selector: 'app-grass-cutting-display',
  templateUrl: './grass-cutting-display.component.html',
  styleUrls: ['./grass-cutting-display.component.css']
})
export class GrassCuttingDisplayComponent implements OnInit {
displayedColumns:string[]=[
  "grass_cutting_report_date",
  "grass_cutting_report_daily_in_acres",
  "grass_cutting_report_mtd_in_acres"
]
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
    .getAllDgrGrassCuttingReportData()
    .subscribe((grassCuttingReportData:any)=>{
      console.log(grassCuttingReportData)
      this.dataSource.data=grassCuttingReportData;
    })
  }

}
