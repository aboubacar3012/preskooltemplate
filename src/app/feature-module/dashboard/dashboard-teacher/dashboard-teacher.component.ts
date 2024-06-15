/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexTooltip,
  ApexFill,
  ApexResponsive

} from "ng-apexcharts";

 
export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart|any;
  xaxis: ApexXAxis| any;
  dataLabels: ApexDataLabels| any;
  grid: ApexGrid| any;
  stroke: ApexStroke| any;
  title: ApexTitleSubtitle| any;
  plotOptions: ApexPlotOptions| any;
  yaxis: ApexYAxis | ApexYAxis[]| any;
  legend: ApexLegend| any;
  tooltip: ApexTooltip | any;
  responsive: ApexResponsive[]| any;
  fill: ApexFill| any;
  labels: string[]| any;

};


@Component({
  selector: 'app-dashboard-teacher',
  templateUrl: './dashboard-teacher.component.html',
  styleUrls: ['./dashboard-teacher.component.scss']
})
export class DashboardTeacherComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  selected!: Date | null;

  constructor() { 
    this.chartOptions = {
      series: [
        {
          name: "Teacher",
          data: [45, 60, 75, 51, 42, 42, 30],
          color: '#3D5EE1',
          
        },
        {
          name: "Students",
          data: [24, 48, 56, 32, 34, 52, 25],
          color: '#70C4CF',
        }
      ],
      chart: {
        height: 350,
        type: "area"
        
      },
      
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
  }
  options1 = {
    outline: false
  };

  
}
