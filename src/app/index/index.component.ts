import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HardcodedAuthenticationService } from '../services/hardcoded-authentication.service';
import { WelcomeDataService } from '../services/data/welcome-data.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  username = ''
  welcomeMessageFromService : string
  name: string = 'fukn3k'

  constructor(
    private route: ActivatedRoute,
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private service: WelcomeDataService
    ) { }

  ngOnInit() {
    this.username = this.route.snapshot.params['username']
  }

  getWelcomeMessage() {
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccesfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }
  getWelcomeMessageWithParameters() {
    this.service.executeHelloworldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccesfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }
  handleSuccesfulResponse(response) {
    this.welcomeMessageFromService = response.message
    console.log(response)
    console.log(response.message)
  }
  handleErrorResponse(error) {
    this.welcomeMessageFromService = error.error.message
  }

}
