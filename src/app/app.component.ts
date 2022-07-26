import { Component } from '@angular/core';



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

 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor() { }
  title = 'BQ_FE';
  ngOnInit(){
  }
}

