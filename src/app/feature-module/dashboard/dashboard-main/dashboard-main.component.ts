/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component,ViewChild } from "@angular/core";

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
  selector: "app-dashboard-main",
  templateUrl: "./dashboard-main.component.html",
  styleUrls: ["./dashboard-main.component.scss"],
})
export class DashboardMainComponent  {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;
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
        type: "line"
        
      },
      
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
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
    this.chartOptions2 = {
      series: [
        {
          name: "Boys",
          color: '#3D5EE1',
          data: [420, 532, 516, 575, 519, 517, 454, 392, 262, 383, 446, 551, 563, 421, 563, 254, 452]
        },
        {
          name: "Girls",
          color: '#70C4CF',
          data: [336, 612, 344, 647, 345, 563, 256, 344, 323, 300, 455, 456, 526, 652, 325, 425, 436]
        },
      ],
      chart: {
        type: "bar",
        height: 350,
        stacked: false
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        bar: {
          vertical: true
        }
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },
      title: {
        text: "Fiction Books Sales"
      },
   
      yaxis: {
        title: {
          text: undefined
        }
      },

      fill: {
        opacity: 1
      },
      legend: {
        position: "top",
        verticalAlign: "left",
        offsetX: 40
      }
    };
  }


}
