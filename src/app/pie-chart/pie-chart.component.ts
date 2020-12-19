import { FormatWidth } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: [ './pie-chart.component.css' ]
})
export class PieChartComponent  {
  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['A+','B+','O+','AB+','A-','B-','O-','AB-'];
  public pieChartData: SingleDataSet = [30, 50, 10, 20, 15, 45, 25, 35];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors =[ 
    {
      backgroundColor: 
      [
        'rgb(51,255,51,0.5)',
        'rgb(66,134,244,0.5)',
        'rgb(236,255,49,0.5)',
        'rgb(224,0,255,0.5)',
        'rgb(18,142,18,0.5)',
        'rgb(33,20,185,0.5)',
        'rgb(255,216,0,0.5)',
        'rgba(97,18,142,0.5)',
      ],
    },
  ];

  public pieChartOptions2: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels2: Label[] = ['0','1','Más a 1'];
  public pieChartData2: SingleDataSet = [40, 30, 12];
  public pieChartType2: ChartType = 'pie';
  public pieChartLegend2 = true;
  public pieChartPlugins2 = [];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {
  }
}
