import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WelcomeDataService} from "../service/data/welcome-data.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = ''
  welcomeMessageFromService:string;

  constructor(private route:ActivatedRoute,private servise:WelcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    //console.log(this.servise.executedHelloWorldService());
    this.servise.executedHelloWorldService().subscribe(
      response => this.handleSuccessfulResponse(response)
    );

  }

  getWelcomeMessageWithParameter() {
    //console.log(this.servise.executedHelloWorldService());
    this.servise.executedHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response)
    );

  }

  handleSuccessfulResponse(response){
    this.welcomeMessageFromService=response.message
  }

}


