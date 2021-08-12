import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { LoginServiceService } from './login-service.service';

fdescribe('LoginServiceService', () => {
  let service: LoginServiceService;
  let mocHttpClient: HttpClient;
  let httpMock: HttpTestingController;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(LoginServiceService);
  // });

  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[LoginServiceService]
    });
    service = TestBed.inject(LoginServiceService);
    httpMock=TestBed.inject(HttpTestingController);
  });

  afterEach(
    () => {
     httpMock.verify();
   });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  // it('should be login', () => {
  //   let mockresponse=[
  //     {id:1,username:'namo'},
      
  //   ];
  //   let mocobj=[
  //     {username:'namo',password:'12345'}
  //   ]
  //   let response;
  //   spyOn(service,'doLogin').and.returnValue(of(mockresponse));
  //   service.doLogin(mocobj).subscribe(res=>{response=res});

  // // expect(response).toEqual(mocobj);
  // });

  it('make expected call dologin', () => {
    let mockresponse=[
      {id:1, productName:'Namo',qty:1,uk_fk:1},
      {id:2, productName:'Om',qty:10,uk_fk:1},
      {id:1, productName:'Shashank',qty:100,uk_fk:1}
    ];
    service.doLogin(mockresponse).subscribe(orders => {
     // expect(orders).toBe(3);
      expect(orders).toEqual(mockresponse);
    });
  
    const req=  httpMock.expectOne("http://localhost:9090/genratetoken");
    expect(req.request.method).toBe('POST');
  req.flush(mockresponse);

  });

  it('should be logout', () => {
    let mockresponse=[
      {id:1,username:'namo'},
      
    ];
    let mocobj=[
      {username:'namo',password:'12345'}
    ]
    let response:true;
    spyOn(service,'logout').and.stub;
    service.logout();

  expect(service.logout()).toBeTruthy;
  });

  it('should be gettoken', () => {
   
    let response:true;
    spyOn(service,'getToken').and.stub;
    service.getToken();

  expect(service.getToken()).toBeTruthy;
  });

  it('should be gettoken', () => {
   
    let response:true;
   // spyOn(service,'getUserId').and.stub;
    service.getUserId();

  expect(service.getUserId()).toBeTruthy;
  });

});
