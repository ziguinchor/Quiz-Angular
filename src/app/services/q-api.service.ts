import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IQusestion } from '../viewModels/i-qusestion';
import { IResult } from '../viewModels/i-result';

@Injectable({
  providedIn: 'root'
})
export class QAPIService {

  constructor( private http:HttpClient) { }

//this function use to retrve data from node jd server 
  getqestions():Observable<IQusestion[]>{
    //${environment.api = "http://localhost:5000/"
    return this.http.get<IQusestion[]>(`${environment.api}Questions/getQuestions`)
  }


}
