import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public loggedIn = false;

  constructor(private loginService: LoginServiceService,private notificationservice: NotificationService) { }

  ngOnInit(): void {
    this.loggedIn = true;
    this.loggedIn = this.loginService.isLoggedIn();
  }

  logoutUser() {
    this.loginService.logout();
    this.notificationservice.logoutSuccess("::Logout Successfully !");
    location.reload();
    window.location.href = "/login"
  }

}
