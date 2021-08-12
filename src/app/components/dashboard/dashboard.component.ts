import { AfterViewInit, Component, OnInit, Output, ViewChild, EventEmitter, Input } from '@angular/core';
import { MatSort } from '@angular/material/sort';

import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';

import { OrderService } from 'src/app/services/order.service';
import { LoginComponent } from '../login/login.component';
import { OrderplaceComponent } from 'src/app/orderplace/orderplace.component';
import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';
import { LoginServiceService } from '../../services/login-service.service';
import { DialogService } from '../../services/dialog.service';
import { NotificationService } from '../../services/notification.service';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';




// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: number;
// }
export interface editInorderEventArgs {
  id: number;
  productName: string;
  price: number;
  qty: number;
  ui_fk: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  [x: string]: any;
  //order: any = []
  item: any
  searchkey: any
  event: any
  parentdata: any[] = []
  displayedColumns: string[] = ['id', 'productName', 'price', 'qty', 'actions'];
  //dataSource = ELEMENT_DATA;

  table: any;
  userid: any;
  flag: any;
  list: any
  //@Output('change') change=new EventEmitter();
  constructor(private orderservice: OrderService,
    private dialog: MatDialog, private loginService: LoginServiceService,
    private dialogservice: DialogService, private notificationservice: NotificationService

  ) { }



  order1!: MatTableDataSource<editInorderEventArgs>;
  orders: any[] = [];
  @ViewChild(MatSort) sort: MatSort = new MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator | null;

  // @ViewChild(MatPaginatorIntl)paginator:MatPaginator=new MatPaginatorIntl;
  ngOnInit(): void {
    this.userid = this.loginService.getUserId();
    this.getAllRecord(this.userid)
    console.log("getting order value " + this.order1)
    this.getLoggedin();
    // this.orderservice.$isLoggedin.subscribe((data) => {
    //   this.ordercredentails = data;
    //   console.log("i got ordercredentails", this.ordercredentails);

    // })

  }

  getLoggedin() {
    this.orderservice.$isLoggedin.subscribe((data) => {
      this.ordercredentails = data;
      console.log("i got ordercredentails", this.ordercredentails);

    })
  }

  getAllRecord(userid: string) {
    debugger;
    this.orderservice.getAllRecord(userid).subscribe(
      (order1: any) => {
        console.log(order1);
        //this.orders= new MatTableDataSource(order);

        this.orders = order1;
        console.log("sssss", this.orders);
        this.order1 = new MatTableDataSource<any>(this.orders);
        console.log('getall value', this.order1)
        this.order1.paginator = this.paginator;
        this.order1.sort = this.sort;



      },
      error => {
        console.log(error);
      }
    )

  }
  // dataSource = new MatTableDataSource(this.order);

  onsearchkey() {
    debugger;
    this.searchkey = "";
    console.log(this.searchkey)
    this.applyfilter();
  }



  applyfilter() {
    debugger;
    this.order1.filter = this.searchkey.trim().toLowerCase();

  }
  oncreate() {
    // const dialogconfig = new MatDialogConfig();
    // // dialogconfig.disableClose=true;
    // dialogconfig.autoFocus = true;
    // dialogconfig.width = "60%";
    // disableClose:true;
    // this.dialog.open(OrderplaceComponent, dialogconfig);



    this.dialog.open(OrderplaceComponent, {
      height: '37rem',
      width: '40rem',
      disableClose: true,

    });

  }
  onedit(event: any) {
    debugger;

    this.orderservice.dashboardserice(event);
    console.log("------" + event);
    // this.parentdata.push(event);
    //console.log("parentdata---"+this.parentdata)
    // const dialogconfig = new MatDialogConfig();
    // // dialogconfig.disableClose=true;
    // dialogconfig.autoFocus = true;
    // dialogconfig.width = "90%";
    //  window.location.href="/orderplace"
    this.dialog.open(OrderplaceComponent);
  }



  ordercredentails = {
    id: '',
    productName: '',
    price: '',
    qty: '',
    ui_fk: ''
  }

  // doget(childPosts: any) {
  //   debugger;
  //   for (let i = 0; i < childPosts.length; i++)
  //     console.log(childPosts[i]);
  // }


  //delete function

  ondelete(id: any) {
    console.log("---", id);
    // this.dialogservice.openDialogbox().
    //   afterClosed().subscribe(res => {
    //     console.log("rrrrrrrrrr", res)
    //     if (res == true) {
    //       this.ondeleterecord(id);
    //       this.notificationservice.delete("::! Deleted successfully");
    //       window.location.href = "/dashboard"
    //     }
    //   });
    this.openDialogBox(id);

  }

  openDialogBox(id: any) {
    this.dialogservice.openDialogbox().
      afterClosed().subscribe(res => {
        console.log("rrrrrrrrrr", res)
        if (res == true) {
          this.ondeleterecord(id);
          this.notificationservice.delete("::! Deleted successfully");
          window.location.href = "/dashboard"
        }
      });
  }


  ondeleterecord(id: any) {


    this.orderservice.deleteOrder(id).subscribe(
      (response: any) => {
        //success
        console.log("getting order suucess" + " " + response);
        this.getAllRecord(this.userid);

      },
      (error: any) => {
        //error
        console.log(error);

      }
    )
  }


  openDialog(element: any) {
    debugger;
    this.flag = 'edit';
    console.log(element)

    this.dialog.open(OrderplaceComponent, {
      height: '37rem',
      width: '40rem',
      disableClose: true,
      data: {
        flag: this.flag,
        Data: element,

      },
    });
  }

}

function paginator(paginator: any) {
  throw new Error('Function not implemented.');
}

function item(item: any, arg1: (any: any) => any) {
  throw new Error('Function not implemented.');
}


