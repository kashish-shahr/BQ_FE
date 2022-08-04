import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Student/Student.model';
import { StudentService } from 'src/app/Student/student.service';
declare var google:any;


@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})

export class PiechartComponent implements OnInit {
  
  constructor(private _students:StudentService) { }
  
  StudentList:Student[]=[];
  pieChartData: { [id: string] : number } = {}

  ngOnInit(): void {
    
    this.pieChartData["childrens"]=0;
    this.pieChartData["teens"]=0;
    this.pieChartData["adults"]=0;
    google.charts.load('current', {packages: ['corechart']});


    this._students.getAllStudents().subscribe(
      (data:any)=>
      {
        this.StudentList=data;
        this.StudentList.forEach((s)=>{
          if(s.Age<13){
            this.pieChartData["childrens"]++;
          }else if(s.Age<20){
            this.pieChartData["teens"]++;
          }else if(s.Age<30){
            this.pieChartData["adults"]++;
          }
        });
        this.buildChart();
      }
      );
    
  }
  buildChart(){
    var func=(chart:any)=>{
      var data=new google.visualization.DataTable()
      data.addColumn('string','Weight type');
      data.addColumn('number','Slices');
      data.addRows([
        ["childrens",this.pieChartData["childrens"]],
        ["teens",this.pieChartData["teens"]],
        ["adults",this.pieChartData["adults"]]
      ])
    var options={
      title:'Student Weight'
    }
    chart().draw(data,options);
    }
    var chart =()=> new google.visualization.PieChart(document.getElementById('divPieChart'));
    var callback=()=>func(chart);
    google.charts.setOnLoadCallback(callback);
  }
  // https://github.com/Ehasaniceiu04/googlechart/blob/main/angular/src/app/chart/pie-chart/pie-chart.component.ts
}
