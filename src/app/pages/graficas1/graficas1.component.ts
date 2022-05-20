import { Component, OnInit } from '@angular/core';
//import { ChartData, ChartOptions, ChartType, Color } from 'chart.js';
import { ChartOptions, ChartType, ChartData } from 'chart.js';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styleUrls: ['./graficas1.component.css']
})
export class Graficas1Component implements OnInit {

  public doughnutChartLabels: string[] = [ 'Esika', 'Ripley', 'Oeschle' ];
  
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ],
        backgroundColor: ['rgba(76,175,80,1)', 'rgba(255,152,0,1)', 'rgba(200,175,50,1)'] }     
    ],
    
  };

  public barChartLegend = true;

  public doughnutChartType: ChartType = 'doughnut';
  
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  // public doughnutChartData: ChartData<'doughnut'> = {
  //   labels: this.doughnutChartLabels,
  //   datasets: [
  //     { data: [ 350, 450, 100 ] },
  //     { data: [ 50, 150, 120 ] },
  //     { data: [ 250, 130, 70 ] }
  //   ]
  // };
//-----------------------------------------------------------------------------------------------------  
//Grafico2
public chartLabels: string[] = [ 'Esika', 'Ripley', 'Oeschle' ];

// public graficos2: any[] = {
//   data: {[350, 450, 100]}
// };

graficos: any = {
  'grafico1': {
    'labels': ['Con Frijoles', 'Con Natilla', 'Con tocino'],
    'data':  [24, 30, 46],
    'type': 'doughnut',
    'leyenda': 'El pan se come con'
  },
  'grafico2': {
    'labels': ['Hombres', 'Mujeres'],
    'data':  [4500, 6000],
    'type': 'doughnut',
    'leyenda': 'Entrevistados'
  },
  'grafico3': {
    'labels': ['Si', 'No'],
    'data':  [95, 5],
    'type': 'doughnut',
    'leyenda': '¿Le dan gases los frijoles?'
  },
  'grafico4': {
    'labels': ['No', 'Si'],
    'data':  [85, 15],
    'type': 'doughnut',
    'leyenda': '¿Le importa que le den gases?'
  },
};


  //[chartData]="graficos.datasets.data" 
  constructor() { }

  ngOnInit(): void {
  }

}
