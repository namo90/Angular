import { Injectable } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  url = "http://localhost:9090/";

  form:FormGroup=new FormGroup({
    $key:new FormControl(null),
    fullName:new FormControl('',Validators.required),
    email:new FormControl(''),
    mobile:new FormControl('',[Validators.required,Validators.minLength(8)]),
    city:new FormControl(''),
    gender:new FormControl('1'),
    deparment:new FormControl(0),
    hireDate:new FormControl(''),
    isPermant:new FormControl(false)
  })

  constructor(private http: HttpClient){ }
saveEmployee(employee: any){
  debugger;
  console.log("inside employeeservice",employee)
  console.log(this.url + 'save')

  return this.http.post(this.url + 'save', employee)
}
}
