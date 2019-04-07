import { Component, OnInit } from '@angular/core';
import { GraalDataService } from '../services/data/graal-data.service';
import { Router } from '@angular/router';
import { HttpClient, HttpClientJsonpModule, HttpResponse } from '@angular/common/http';

export class GraalServers {
  constructor(
    public name: string,
    public description: string,
    public url: string,
    public version: string,
    public uptime: number,
    public playercount: number,
    public playerlist: Array<string>
  ){}
}

@Component({
  selector: 'app-graaljson',
  templateUrl: './graaljson.component.html',
  styleUrls: ['./graaljson.component.css']
})
export class GraaljsonComponent implements OnInit {

  gr_json: Object = []

  constructor(
    private graalDataService: GraalDataService
    ) { }

  ngOnInit() { 
    this.updateServerList();
  }

  updateServerList() {
    this.graalDataService.retrieveGraalServers()
    .subscribe((res)=>{
      this.gr_json = res
    })
  }

}
