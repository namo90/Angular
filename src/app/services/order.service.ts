import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { editInorderEventArgs } from '../components/dashboard/dashboard.component';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  $isLoggedin = new EventEmitter();
  order1: editInorderEventArgs = {
    id: 0,
    price: 0,
    productName: "",
    qty: 0,
    ui_fk: 0
  };
  url = "http://localhost:9090/";
  getAllrecordsurl = "http://localhost:9090/findAllOrders";



  constructor(private http: HttpClient) { }
   httpHeaders=new HttpHeaders({
'content-type':'application/json',
  });
  saveOrder(ordercredentails: any) {
    debugger;
    console.log("iside  the  order save ggg")
    console.log(this.url + 'save')

    return this.http.post(this.url + 'save', ordercredentails)
  }

  //calling excelto json 

  sendJsondata(jsondata:any){
    debugger;
    console.log("gtting json object",jsondata)
    return this.http.post(this.url + 'exceltodb', jsondata,{headers:this.httpHeaders});
  }

  //update function calling

  updateOrder(ordercredentails: any) {
    debugger;
    console.log("iside  the  order updateorder ggg")
    console.log(this.url + 'updateorder')

    return this.http.put(this.url + 'updateorder', ordercredentails)
  }

  //delete record 
  deleteOrder(id: any) {
    debugger;
    console.log("delete record id", id)
    return this.http.delete(this.url + 'deleterecord?id=' + id)
  }

  dashboardserice(event: any) {
    debugger;
    console.log("event data---", event)
    this.order1.id = event.id,
      this.order1.price = event.price,
      this.order1.productName = event.productName,
      this.order1.qty = event.qty,
      this.order1.ui_fk = event.ui_fk
    this.$isLoggedin.emit(this.order1);
    console.log("dashboard edit");
  }
//get all records of based on user
  getAllRecord(userid: string): Observable<any[]> {
    debugger;
    console.log("iside  the  order findAllOrders ggg")
    console.log(this.url + 'findAllOrders')

    return this.http.get<any[]>(this.url + 'findByUser?id=' + userid)
    
  }
  //filter the record
  filterRecord(keyword: any) {
    debugger;
    return this.http.get(this.url + 'filterorder?id=' + keyword)
  }
  //get all user data
  getAllRecordOfUsers() {
    debugger;
    console.log("iside  the  order findAllOrders ggg")
    console.log(this.url + 'findAllOrders')

    return this.http.get<any[]>(this.url + 'findAllOrders')
  }
}
