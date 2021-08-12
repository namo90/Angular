import { Component, OnInit } from '@angular/core';
import * as XLXS from 'xlsx';
import { OrderService } from '../services/order.service';
import { NotificationService } from '../services/notification.service';
@Component({
  selector: 'app-excelreade',
  templateUrl: './excelreade.component.html',
  styleUrls: ['./excelreade.component.css']
})
export class ExcelreadeComponent implements OnInit {
  convertedJson!: string;

  constructor(private orderservice: OrderService, private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  fileUpload(event:any){
    debugger;
  let  convertedJson !:any;
    console.log(event.target.files);
    const selectedFile=event.target.files[0];
    const fileReader=new FileReader();
    fileReader.readAsBinaryString(selectedFile);
    fileReader.onload=(event:any)=>{
      console.log(event);
      let binaryData=event.target.result;
      let workbook=XLXS.read(binaryData,{type:'binary'});
      workbook.SheetNames.forEach(sheet=>{
        const data=XLXS.utils.sheet_to_json(workbook.Sheets[sheet]);
        console.log(data);
      this.convertedJson=  JSON.stringify(data,undefined,4);
//excel to json convert calling
this.orderservice.sendJsondata(this.convertedJson).subscribe(
  (response: any) => {
    //success
    console.log("getting order suucess" + " " + response);
    this.notificationService.success(':: Summited successfully');
   // this.submitted=true;
  //  window.location.href = "/dashboard"
  },
  (error: any) => {
    //error
    console.log(error);

  }
)

      })
    }

  }



}
