import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { AppService } from './app.service';


export class Student {
  constructor(
    public id:number,
  public name: string,
  public age: number,
  public weight: number,
  ){}
}

export enum ChartType {
    
  AnnotationChart = 'AnnotationChart',
  AreaChart = 'AreaChart',
  Bar = 'Bar',
  BarChart = 'BarChart',
  BubbleChart = 'BubbleChart',
  Calendar = 'Calendar',
  CandlestickChart = 'CandlestickChart',
  ColumnChart = 'ColumnChart',
  ComboChart = 'ComboChart',
  PieChart = 'PieChart',
  Gantt = 'Gantt',
  Gauge = 'Gauge',
  GeoChart = 'GeoChart',
  Histogram = 'Histogram',
  Line = 'Line',
  LineChart = 'LineChart',
  Map = 'Map',
  OrgChart = 'OrgChart',
  Sankey = 'Sankey',
  Scatter = 'Scatter',
  ScatterChart = 'ScatterChart',
  SteppedAreaChart = 'SteppedAreaChart',
  Table = 'Table',
  Timeline = 'Timeline',
  TreeMap = 'TreeMap',
  WordTree = 'wordtree'
};


/**
 * @title Basic use of `<table mat-table>`
 */
 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private _student:AppService){
    this.dataSource=new MatTableDataSource<Student>();
  }
  i:number=1;
  title = 'BQ_FE';
  displayedColumns: string[] = ['id','name','age' ,'weight'];
  Students:Student[]=[];
  // dataSource = STUDENT_DATA;
  dataSource: MatTableDataSource<Student>;

  formGroup=new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),
    age:new FormControl(''),
    weight:new FormControl('')
  });

  ngOnInit(){
    this.refresh();
  }
  submitStudent(){
    let body=this.formGroup.value;
    this._student.addStudent(body).subscribe(data=>console.log("data",data));
  }
   private  refresh() {
     this._student.getAllStudents().subscribe(
       (data: any) => {
         
         this.Students = data;
         this.dataSource.data = this.Students;
         console.log(data);
       });
   }
}

