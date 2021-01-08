import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
var miarray = [22,33,44,55]
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})

export class BarChartComponent {
 
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };
  
  public barChartLabels: Label[] = ['UNMSM','MINSA','ESSALUD','EPS/PRIVADO'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65,23,miarray[2],42], label: 'SEGUROS'}
     
  ];

  public barChartColors =[ 
    {
      backgroundColor: 
      [
        'rgba(66,134,244,0.7)',
				'rgba(74,135,72,0.7)',
				'rgba(229,89,50,0.7)',
				'rgba(11,23,50,0.7)'
      ],
    },
  ];

  public barChartOptions2: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };
  
  public barChartLabels2: Label[] = ['2013','2014','2015','2016','2017','2018','2019','2020'];
  barChartType2: ChartType = 'bar';
  barChartLegend2 = true;
  barChartPlugins2 = [];

  public barChartData2: ChartDataSets[] = [
    { data: [65,23,56,42,30,15,60,38], label: 'AÑOS'}
     
  ];

  public barChartColors2 =[ 
    {
      backgroundColor: 
      [
        'rgba(66,134,244,0.7)',
				'rgba(74,135,72,0.7)',
				'rgba(229,89,50,0.7)',			
				'rgba(11,23,50,0.7)',
				'rgba(106,212,244,0.7)',
				'rgba(174,135,72,0.7)',
				'rgba(29,89,150,0.7)',
				'rgba(117,23,50,0.7)'			
      ],
    },
  ];

  constructor() { }

  ngOnInit() {
  }
}
