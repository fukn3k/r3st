import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GraalDataService {

  constructor(
    private http: HttpClient
    ) { }

  retrieveGraalServers() {
    return this.http.get('https://api.graalserver.com/servers/')
  }

}