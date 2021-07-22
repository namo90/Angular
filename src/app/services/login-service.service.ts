import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {


  url = "http://localhost:9090/"

  constructor(private http: HttpClient) { }

  doLogin(logincredentails: any) {
    debugger;
    //token generate
    console.log(this.url + 'genratetoken')

    return this.http.post(this.url + 'genratetoken', logincredentails)
  }

  //for user login
  loginUser(response: any) {
    debugger;
    localStorage.setItem("token", response.token)
    console.log("token getting here", localStorage.getItem("token"))
    localStorage.setItem("userid", response.userid1)
    console.log("token getting here", localStorage.getItem("userid"))
    return true;
  }
  isLoggedIn() {
    let token = localStorage.getItem("token");
    if (token == undefined || token === '' || token == null) {
      return false;
    } else {
      return true;
    }

  }

  logout() {
    localStorage.removeItem('token')
    return true;
  }
  //for getting the token 
  getToken() {
    return localStorage.getItem("token")
  }

  //for getting the userid 
  getUserId() {
    return localStorage.getItem("userid")
  }
}
