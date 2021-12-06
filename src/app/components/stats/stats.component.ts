import { Component, OnInit,ViewChild } from '@angular/core';
import {ApiserviceService } from 'src/app/services/apiservice.service'
import { ChartComponent } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: any;
  chart: any;
  responsive: any;
  labels: any;
};
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  @ViewChild("chart")
  chart: ChartComponent = new ChartComponent;
  public chartOptions!: Partial<ChartOptions>;
  encuestasRespondidas = 0
  tiempoPromedio = []
  redSocialFavorita = ''
  redSocialMenosFavorita = ''
  tiempoPorEdad1 = ''
  tiempoPorEdad2 = ''
  tiempoPorEdad3 = ''
  tiempoPorEdad4 = ''

  constructor(private apiService: ApiserviceService) {

    this.apiService.getTypeRequest('tiempoPromedio').subscribe((data:any)=>{
     this.tiempoPromedio = data.map((element:any)=> {
       return element.toFixed(2);
     });//map
     this.chartOptionsCreator(this.tiempoPromedio)
    });
    this.apiService.getTypeRequest('stats').subscribe((data:any)=>{
      console.log(data);
      this.encuestasRespondidas = data;
    });
    this.apiService.getTypeRequest('redFavorita').subscribe((data:any)=>{
      console.log(data);
      // this.redSocialFavorita = data.redSocialFavorita;
      switch(data.redSocialFavorita){
        case 'Fa':
          this.redSocialFavorita = 'Facebook';
          break;
        case 'Tw':
          this.redSocialFavorita = 'Twitter';
          break;
        case 'Wa':
          this.redSocialFavorita = 'Whatsapp';
          break;
        case 'In':
          this.redSocialFavorita = 'Instagram';
          break;
        case 'Tk':
          this.redSocialFavorita = 'Tiktok';
          break;
      }
      switch(data.redSocialMenosFavorita){
        case 'Fa':
          this.redSocialMenosFavorita = 'Facebook';
          break;
        case 'Tw':
          this.redSocialMenosFavorita = 'Twitter';
          break;
        case 'Wa':
          this.redSocialMenosFavorita = 'Whatsapp';
          break;
        case 'In':
          this.redSocialMenosFavorita = 'Instagram';
          break;
        case 'Tk':
          this.redSocialMenosFavorita = 'Tiktok';
          break;
      }
    })
    this.apiService.getTypeRequest('redMasUsada-edad').subscribe((data:any)=>{
      console.log(data);
      this.tiempoPorEdad1 = data.rango1
      this.tiempoPorEdad2 = data.rango2
      this.tiempoPorEdad3 = data.rango3
      this.tiempoPorEdad4 = data.rango4
    })

  }

  ngOnInit(): void {
  }

  chartOptionsCreator(tiempo:any){
    this.chartOptions = {
      series: [parseFloat(tiempo[0]), parseFloat(tiempo[1]), parseFloat(tiempo[2]), parseFloat(tiempo[3]),parseFloat(tiempo[4])],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Facebook", "Instagram", "TikTok", "Whatsapp","Twitter"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

}
}
