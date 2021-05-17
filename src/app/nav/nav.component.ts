import { Component, OnInit } from '@angular/core';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  log:String = "";
  patient: boolean = false;
  order: boolean = false;
  med: boolean = false;
  doc: boolean = false;
  fin: boolean = false;
  bill: boolean = false;
  sup: boolean = false;
  emp: boolean = false;


  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {

    this.log = this.hardcodedAuthenticationService.isAdmin();
    if(this.log == 'ss' || this.log =="ee" || this.log =="dd"){
      this.patient = true;
    }

    if(this.log == 'ss' || this.log =="mm"){
      this.order = true;
    }

    if(this.log == 'ss' || this.log =="ee"){
      this.med = true;
    }

    if(this.log == 'ss' || this.log =="ee"){
      this.doc = true;
    }

    if(this.log == 'ss' || this.log =="mm"){
      this.fin = true;
    }

    if(this.log == 'ss' || this.log =="ee"){
      this.bill = true;
    }

    if(this.log == 'ss' || this.log =="mm"){
      this.sup = true;
    }

    if(this.log == 'ss'){
      this.emp = true;
    }


  }

}
