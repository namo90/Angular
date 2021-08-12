import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginServiceService } from 'src/app/services/login-service.service';
import {of} from 'rxjs';
import { LoginComponent } from './login.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginservice:LoginServiceService

  const apiServiceStub = () =>({
    doLogin : () => ({
      pipe : () =>({
        subscribe :(() => {})
      })
    }),
     loginUser : () => ({
      pipe : () => ({
         subscribe : (() => {})
       })
     })
  })

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ RouterTestingModule,HttpClientModule,MatSnackBarModule ],
      schemas: [NO_ERRORS_SCHEMA],
      // providers:[LoginServiceService]
      providers: [
        
        { provide: LoginServiceService, useFactory: apiServiceStub }
        
      ]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    loginservice=TestBed.get(LoginServiceService);
    fixture.detectChanges();
  });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
//   it('should assert "dologin" has been called',()=>{
//    let user= component.logincredentails.username='namo';
//   let pwd=  component.logincredentails.password='12345';

//    spyOn(loginservice, 'doLogin').and.returnValue(of({}));
//   // spyOn(loginservice, 'doLogin').and.callThrough();
//    let login= component.onSubmit();
//  //  expect(login).toEqual(true);
//  expect(loginservice.doLogin(component.logincredentails)).toHaveBeenCalled();
//   });

  // it('should submit the new Dologin details', () => {
  //   const apiServiceStub : LoginServiceService = fixture.debugElement.injector.get(LoginServiceService);

  //   spyOn(apiServiceStub,'doLogin').and.returnValue(of({"stauscode":200}));
  //   component.onSubmit();
  //  expect(loginservice.doLogin(component.logincredentails)).toHaveBeenCalled();

  // })

  it('should call dologin',()=>{
    const fixture=TestBed.createComponent(LoginComponent);
   const app= fixture.componentInstance;
   let service=fixture.debugElement.injector.get(LoginServiceService);
   app.logincredentails.username='namo';
   app.logincredentails.password='12345';
   let mocobj=[
    {username:'namo',password:'12345'}
  ]
  // spyOn(service,"loginUser").and.stub();
  spyOn(service,"doLogin").and.callFake(()=>{
     return of({
     //  "statuscode":200
     })
   })
   app.onSubmit();
    //  expect(app.onSubmit).toEqual({
    //   mocobj
    //  })
  })
});
