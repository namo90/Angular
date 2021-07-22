import { Component, OnInit, Input } from '@angular/core';
import { editInorderEventArgs } from '../components/dashboard/dashboard.component';
import { LoginServiceService } from '../services/login-service.service';
import { OrderService } from '../services/order.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { NotificationService } from '../services/notification.service';
@Component({
  selector: 'app-orderplace',
  templateUrl: './orderplace.component.html',
  styleUrls: ['./orderplace.component.css']
})
export class OrderplaceComponent implements OnInit {

  ordercredentails = {
    productName: '',
    price: '',
    qty: '',
    ui_fk: '',
    id: '',
  }
  userid: any
  FlagValue: any;
  hideMe: boolean = true;

  @Input() childPosts: any[] = [];
  constructor(private orderservice: OrderService, private loginService: LoginServiceService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<OrderplaceComponent>,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    console.log("ffffffffffff", this.data.flag);
    this.FlagValue = this.data.flag;
    this.ordercredentails.productName = this.data.Data.productName;
    this.ordercredentails.price = this.data.Data.price;
    this.ordercredentails.qty = this.data.Data.qty;
    this.ordercredentails.ui_fk = this.data.Data.ui_fk;
    this.ordercredentails.id = this.data.Data.id;
    console.log("****", this.ordercredentails);
    this.orderservice.$isLoggedin.subscribe((data) => {
      this.ordercredentails = data;
      console.log("i got ordercredentails", this.ordercredentails);

    })
    console.log(".........." + this.childPosts);

  }
  doget(childPosts: any) {
    debugger;
    for (let i = 0; i < childPosts.length; i++)
      console.log(childPosts[i]);
  }

 


  onSubmit() {
    debugger;
    // this.doget(this.childPosts);
    if (this.FlagValue != 'edit') {
      this.ordercredentails.id = '';
    }
    if (this.ordercredentails.id != null && this.ordercredentails.id != "") {
      this.Update();
    } else {

      console.log("here get data", this.ordercredentails.productName)
      console.log("form is sumbitted");
      if ((this.ordercredentails.productName != '' && this.ordercredentails.price != '') && (this.ordercredentails.productName != null && this.ordercredentails.price != null) && (this.ordercredentails.qty != null && this.ordercredentails.qty != null)) {
        console.log("We have to sumbit form");
        this.userid = this.loginService.getUserId();
        this.ordercredentails.ui_fk = this.userid;
        this.orderservice.saveOrder(this.ordercredentails).subscribe(
          (response: any) => {
            //success
            console.log("getting order suucess" + " " + response);
            this.notificationService.success(':: Summited successfully');
            window.location.href = "/dashboard"
          },
          (error: any) => {
            //error
            console.log(error);

          }
        )
        //token generate here
      } else {
        console.log("Fields are Empty");
      }
    }
  }
  docheck() {
    debugger;
    console.log("here get data", this.ordercredentails.productName)
  }
  onclose() {
    alert("dddddddddddddddd");
  }


  //update function

  Update() {

    debugger;
    console.log("here get data", this.ordercredentails.productName)
    console.log("form is sumbitted");
    if ((this.ordercredentails.productName != '' && this.ordercredentails.price != '') && (this.ordercredentails.productName != null && this.ordercredentails.price != null) && (this.ordercredentails.qty != null && this.ordercredentails.qty != null)) {
      console.log("We have to sumbit form");
      this.orderservice.updateOrder(this.ordercredentails).subscribe(
        (response: any) => {
          //success
          console.log("getting order suucess" + " " + response);
          this.notificationService.loginSuccess(':: Updated record successfully');
          window.location.href = "/dashboard"
        },
        (error: any) => {
          //error
          console.log(error);

        }
      )
      //token generate here
    } else {
      console.log("Fields are Empty");
    }
  }

  closeDialog() {
    this.dialogRef.close(false);
  }
  // docheck(){
  //   debugger;
  //  console.log("here get data",this.ordercredentails.productName)
  // }
  // onclose(){
  //   alert("dddddddddddddddd");
  // }

  onlyNumberAllowed(event:any){
    const charcode=(event.which)?event.which:event.keycode;
    if(charcode>31 && (charcode<48 || charcode >57)){
      console.log('charcode resticted',charcode)
      return false;
    }
return true;
  }
}