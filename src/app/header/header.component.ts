import { Component, OnInit } from '@angular/core';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  log:String = "";
  person:String = "";

  constructor(private hardcodedAuthenticationService:HardcodedAuthenticationService) { }

  ngOnInit() {
    this.log = this.hardcodedAuthenticationService.isAdmin();
    if(this.log == 'ss'){
      this.person = 'Admin';
    }
    else if(this.log == 'ee'){
      this.person = 'Employee';
    }
    else if(this.log == 'dd'){
      this.person = 'Doctor';
    }
    else{
      this.person = 'Manager';
    }

  }

}
