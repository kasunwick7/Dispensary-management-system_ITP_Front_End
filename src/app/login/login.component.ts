import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = ''
  password = ''
  errorMessage = 'Invalid Credentials';
  invalidLogin = false



  constructor(private router: Router,private hardcodedAuthenticationService:HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {

    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      if(this.username === 'root'){
        this.router.navigate(['dash']);
        this.invalidLogin = false;
      }
      else if(this.username === 'man'){
        this.router.navigate(['dash']);
        this.invalidLogin = false;
      }
      else if(this.username === 'emp'){
        this.router.navigate(['dash']);
        this.invalidLogin = false;
      }
      else if(this.username === 'doc'){
        this.router.navigate(['dash']);
        this.invalidLogin = false;
      }

    }
    else {
      this.invalidLogin = true;
    }
  }

}
