import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeComponent } from 'src/app/components/employee/employee.component';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  [x: string]: any;
  userid: any;
  @ViewChild(MatSort) sort: MatSort = new MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator | null;
  constructor(private orderservice: OrderService,private dialog: MatDialog) { }
  listData!: MatTableDataSource<any>;
  orders: any[] = [];
  displyedColumns:string[]=['id','productName','price','qty','Actions'];
  ngOnInit(): void {
  //  this.userid = this.loginService.getUserId();
    this.getAllRecord()
  }

  getAllRecord() {
    debugger;
    this.orderservice.getAllRecordOfUsers().subscribe(
      (list:any) => {
        this.orders=list;
        console.log("--------------",list)
        // let array:any=list.map(item=>{
        //   return{
        //     $key:item.key,
        //     ...item.payload.value()
           
        //   };
        // })
        this.listData=new MatTableDataSource(list);
        this.listData.sort=this.sort;
        this.listData.paginator = this.paginator;
        console.log("2222222222222",this.listData);
        
      //  console.log(order1);
        //this.orders= new MatTableDataSource(order);

        // this.orders = order1;
        // console.log("sssss", this.orders);
        // this.order1 = new MatTableDataSource<any>(this.orders);
        // console.log('getall value', this.order1)
        // this.order1.paginator = this.paginator;
        // this.order1.sort = this.sort;



      },
      error => {
        console.log(error);
      }
    )

  }

  openDialog(element: any) {
    debugger;
    this.flag = 'edit';
    console.log(element)

    this.dialog.open(EmployeeComponent, {
      height: '37rem',
      width: '40rem',
      disableClose: true,
      data: {
        flag: this.flag,
        Data: element,

      },
    });
  }


  onsearchkey() {
    debugger;
    this.searchkey = "";
    console.log(this.searchkey)
    this.applyfilter();
  }



  applyfilter() {
    debugger;
    this.listData.filter = this.searchkey.trim().toLowerCase();

  }

}
