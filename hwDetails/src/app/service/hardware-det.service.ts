import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HardwareDetService {

  constructor( private http:HttpClient) { }

  getHardwareDetails(): Observable<any>{
    return this.http.get<any>('http://localhost:8080/');
  }
}
