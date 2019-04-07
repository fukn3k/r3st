import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../services/hardcoded-authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'admin'
  password = ''
  errorMessage = 'Invalid Credentials'
  userLoggedIn = true
  
  constructor(
    private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService
    ) { }

  handleLogin() {
    if (this.hardcodedAuthenticationService.authenticate(this.username,this.password)) {
      this.userLoggedIn = true
      this.router.navigate(['index', this.username])
    }else{
      this.userLoggedIn = false
    }
  }

  ngOnInit() {
  }

}
