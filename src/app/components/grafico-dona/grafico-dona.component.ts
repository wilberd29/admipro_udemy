import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartData } from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: ['./grafico-dona.component.css']
})
export class GraficoDonaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('chartLabels') doughnutChartLabels: string[] = [];
  //@Input('chartData') doughnutChartData: number[] = [];
  @Input('chartData') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ],
        backgroundColor: ['rgba(76,175,80,1)', 'rgba(255,152,0,1)', 'rgba(200,175,50,1)'] }     
    ],
    
  };


  //@Input('chartType') doughnutChartType: string = '';
  @Input('doughnutChartType') doughnutChartType: ChartType = 'doughnut';

}
