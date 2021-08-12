import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeservice:EmployeesService) { }
  deparments=[
    {id:1,value:'Dep 1'},
    {id:2,value:'Dep 2'},
    {id:3,value:'Dep 3'}
  ];
employee={

}
  ngOnInit(): void {
  }
  onSubmit(){
    debugger;
if(this.employeeservice.form.valid){
  console.log(this.employeeservice.form.value);
  this.employee=this.employeeservice.form.value;
  console.log("order ---",this.employee);
}
  this.employeeservice.saveEmployee(this.employee).subscribe(
    (response: any) => {
      //success
      console.log("getting order suucess" + " " + response);
     // this.notificationService.success(':: Summited successfully');
     // this.submitted=true;
      window.location.href = "/dashboard"
    },
    (error: any) => {
      //error
      console.log(error);

    }
  );

}
  }

