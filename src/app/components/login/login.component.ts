import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logincredentails = {
    username: '',
    password: ''
  }

  constructor(public loginService: LoginServiceService,private notificationservice: NotificationService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    debugger;
    console.log("form is sumbitted");
    if ((this.logincredentails.username != '' && this.logincredentails.password != '') && (this.logincredentails.username != null && this.logincredentails.password != null)) {
      console.log("We have to sumbit form");
      this.loginService.doLogin(this.logincredentails).subscribe(
        (response: any) => {
          //success
          console.log(response.token);
          let booleanval = this.loginService.loginUser(response)
          if (booleanval) {
            this.notificationservice.loginSuccess(":: Login successfully");
            console.log("here geting token value" + " -----" + booleanval)
            window.location.href = "/dashboard"
            return "submit successfully";
          } else {
            console.log("here NOT geting token value" + " -----" + booleanval)
            this.notificationservice.Notvalid("::Bad credentials");
            window.location.href = "/login"
            return "bad credentails";
          }
        },
        error => {
          //error
          console.log("eeeeeeeee",error);
          this.notificationservice.Notvalid("::Bad credentials");
            window.location.href = "/login"

        }
      )
      //token generate here
    } else {
      console.log("Fields are Empty");
    }
  }

}
