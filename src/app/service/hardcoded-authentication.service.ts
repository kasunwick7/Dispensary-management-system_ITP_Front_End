import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    if(username==="root" && password === 'code') {
      sessionStorage.setItem('authenticaterUser', username);
      return true;
    }
    else if(username==="man" && password === 'code') {
      sessionStorage.setItem('authenticaterUser', username);
      return true;
    }
    else if(username==="emp" && password === 'code') {
      sessionStorage.setItem('authenticaterUser', username);
      return true;
    }
    else if(username==="doc" && password === 'code') {
      sessionStorage.setItem('authenticaterUser', username);
      return true;
    }

    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }

  isAdmin(){
    let user = sessionStorage.getItem('authenticaterUser');
    if(user === 'root'){
      return "ss";
    }
    else if(user === 'man'){
      return "mm";
    }
    else if(user === 'emp'){
      return "ee";
    }
    else if(user === 'doc'){
      return "dd";
    }

  }

  logout(){
    sessionStorage.removeItem('authenticaterUser')
  }
}
