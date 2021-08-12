import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;
  let mocHttpClient: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[NotificationService]
    });
    service = TestBed.inject(NotificationService);
    httpMock=TestBed.inject(HttpTestingController);
  });

  afterEach(
    () => {
     httpMock.verify();
   });

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(NotificationService);
  // });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be success', () => {
   
    let response:true;
   // spyOn(service,'success').and.returnValue;
    service.success('save successfully');

  expect(service.success('save successfully')).toBeTruthy;
  });

  it('should be delete', () => {
   
    let response:true;
   // spyOn(service,'success').and.returnValue;
    service.delete('delete successfully');

  expect(service.delete('delete successfully')).toBeTruthy;
  });

  it('should be logoutSuccess', () => {
   
    let response:true;
   // spyOn(service,'success').and.returnValue;
    service.logoutSuccess('logout successfully');

  expect(service.logoutSuccess('logout successfully')).toBeTruthy;
  });

  
});
