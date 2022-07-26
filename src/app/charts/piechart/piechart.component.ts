import { Component, OnInit } from '@angular/core';
declare var google:any;

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("here");
    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(this.drawChart);
    console.log("there");
  }

  drawChart(){
    var data=new google.visualization.DataTable()
    data.addColumn('string','Topping');
    data.addColumn('number','Slices');
    data.addRows([
      ['Mushroom',3],
      ['Onions',1],
      ['Olives',1],
      ['Zucchini',1],
      ['Pepproni',2],
    ]);
      // data.addRows([
      //   ['Mushrooms', 3],
      //   ['Onions', 1],
      //   ['Olives', 1], 
      //   ['Zucchini', 1],
      //   ['Pepperoni', 2]
      // ]);
      var options={
        title:'my pizza toppings',
        colors:['red','green','blue','black','gray']
      }
      var chart=new google.visualization.PieChart(document.getElementById('divPieChart'));
      chart.draw(data,options);
    
}
}
