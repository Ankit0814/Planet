import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PlanetOnfoService {
  
  private apiUrl = 'https://swapi.dev/api/planets/';
constructor(private http:HttpClient) { }
getPlanets(): Observable<any> {
  const apiUrl =  this.apiUrl;
  return this.http.get(apiUrl);
}
getResidentData(url: string): Observable<any> {
  // console.log("url are",url);
  return this.http.get(url);
}

getResidentsData(urls: string[]): Observable<any[]> {
  const requests = urls.map(url => this.getResidentData(url));
  // console.log("requests data is", requests)
  // console.log("forkJoin data is ",forkJoin(requests));
  return forkJoin(requests);
}
}
