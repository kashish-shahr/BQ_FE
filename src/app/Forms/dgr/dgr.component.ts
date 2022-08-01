import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DgrDataService } from '../dgr-data.service';



// export interface PeriodicElement {
//   name: string;
//    inverter_reading: number;
//   weight: number;
//   symbol: string;
// }
export interface Data{
  inverter_reading:number;
}
const ELEMENT_DATA: Data[] = [
  { inverter_reading: 123},
  { inverter_reading: 223}
];
@Component({
  selector: 'app-dgr',
  templateUrl: './dgr.component.html',
  styleUrls: ['./dgr.component.css'],
})
export class DgrComponent implements OnInit {
  constructor(
    private _router: Router,
    private _siteInputService: DgrDataService
  ) {
    this.dataSource=new MatTableDataSource();
  }

  // Total Generation (Inverter Reading)	Total Generation (Meter Reading)
  displayedColumns: string[] = ['ir'];
  // dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  dataSource:MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  private siteInputData:Data[];
  ngOnInit(): void {
     this._siteInputService.getAllDgrSiteInputData().subscribe((siteData:Data[])=>{
      this.dataSource.data=siteData;
      });
    console.log('display page', this.siteInputData);
    
    console.log(this.dataSource)
    // console.log(this.dataSource.data)
  }

  addStudent() {
    this._router.navigate(['/adddgr']);
  }
  goToCharts() {}
}
