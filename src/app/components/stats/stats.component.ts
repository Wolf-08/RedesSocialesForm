import { Component, OnInit } from '@angular/core';
import {ApiserviceService } from 'src/app/services/apiservice.service'

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(private apiService: ApiserviceService) {
    this.apiService.getTypeRequest('stats').subscribe((data:any)=>{
      console.log(data);
    })
  }

  ngOnInit(): void {
  }


}
