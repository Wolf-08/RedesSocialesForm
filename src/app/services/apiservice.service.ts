import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  private Api_Server= "http://localhost:8000/";
  constructor(private http: HttpClient) {
    console.log("Service running")
  }
  getTypeRequest(url:any) {
    return this.http.get(this.Api_Server+url).pipe(map(res => {
      return res;
    }));
  }

  postTypeRequest(url:any, payload:any) {
    const headers = new HttpHeaders({"Content-Type": "application/json",'accept': 'application/json'});
    return this.http.post(this.Api_Server+url, payload,{headers: headers}).subscribe((response)=> console.log(response),
    (error)=> console.log(error))
  }
}
