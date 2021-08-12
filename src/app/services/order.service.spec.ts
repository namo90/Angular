import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { OrderService } from './order.service';


fdescribe('OrderService', () => {
  let service: OrderService;
  let mocHttpClient: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[OrderService]
    });
    service = TestBed.inject(OrderService);
    httpMock=TestBed.inject(HttpTestingController);
  });

  afterEach(
    () => {
     httpMock.verify();
   });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should be getAllrecords', () => {
  //   let mockresponse=[
  //     {id:1, productName:'Namo',qty:1,uk_fk:1},
  //     {id:2, productName:'Om',qty:10,uk_fk:1},
  //     {id:1, productName:'Shashank',qty:100,uk_fk:1}
  //   ];
  //   let response;
  //   spyOn(service,'getAllRecordOfUsers').and.returnValue(of(mockresponse));
  //   service.getAllRecordOfUsers().subscribe(res=>{response=res});

  // // expect(response).toEqual(mockresponse);
  // });

  it('make expected call getAllrecords', () => {
    let mockresponse=[
      {id:1, productName:'Namo',qty:1,uk_fk:1},
      {id:2, productName:'Om',qty:10,uk_fk:1},
      {id:1, productName:'Shashank',qty:100,uk_fk:1}
    ];
    service.getAllRecordOfUsers().subscribe(orders => {
      expect(orders.length).toBe(3);
      expect(orders).toEqual(mockresponse);
    });
  
    const req=  httpMock.expectOne("http://localhost:9090/findAllOrders");
    expect(req.request.method).toBe('GET');
  req.flush(mockresponse);

  // expect(response).toEqual(mockresponse);
  });

  it('make expected call getAllrecord passing id', () => {
    let mockresponse=[
      {id:1, productName:'Namo',qty:1,uk_fk:1},
      {id:2, productName:'Om',qty:10,uk_fk:1},
      {id:1, productName:'Shashank',qty:100,uk_fk:1}
    ];
    service.getAllRecord('1').subscribe(orders => {
      expect(orders.length).toBe(3);
      expect(orders).toEqual(mockresponse);
    });
  
    const req=  httpMock.expectOne("http://localhost:9090/findByUser?id=1");
    expect(req.request.method).toBe('GET');
  req.flush(mockresponse);

  });

  // it('should be getAllrecord passing id', () => {
  //   let mockresponse=[
  //     {id:1, productName:'Namo',qty:1,price:1000,uk_fk:1},
  //     {id:2, productName:'Om',qty:10,price:1000,uk_fk:1},
  //     {id:1, productName:'Shashank',qty:100,price:1000,uk_fk:1}
  //   ];
  //   let response;
  //   spyOn(service,'getAllRecord').and.returnValue(of(mockresponse));
  //   service.getAllRecord('1').subscribe(res=>{response=res});

  //  //expect(response).toEqual(mockresponse);
  // });

  // it('should be saveorder', () => {
  //   let mockresponse1=[
  //     {id:11, productName:'Rahul',qty:1,price:100,uk_fk:1},
  //     {id:12, productName:'Sham',qty:10,price:1001,uk_fk:1},
  //     {id:13, productName:'Sha',qty:100,price:1002,uk_fk:1}
  //   ];
  //   let response;
  //   spyOn(service,'saveOrder').and.returnValue(of(mockresponse1));
  //   service.saveOrder(mockresponse1);

  //  //expect(response).toEqual(mockresponse);
  // });


  it('make expected call saveorder', () => {
    let mockresponse=[
      {id:1, productName:'Namo',qty:1,uk_fk:1},
      {id:2, productName:'Om',qty:10,uk_fk:1},
      {id:1, productName:'Shashank',qty:100,uk_fk:1}
    ];
    service.saveOrder(mockresponse).subscribe(orders => {
     // expect(orders.length).toBe(3);
      expect(orders).toEqual(mockresponse);
    });
  
    const req=  httpMock.expectOne("http://localhost:9090/save");
    expect(req.request.method).toBe('POST');
  req.flush(mockresponse);

  });

  // it('should be updateorder', () => {
  //   let mockresponse1=[
  //     {id:11, productName:'Rahul1',qty:1,price:100,uk_fk:1},
  //     {id:12, productName:'Sham111',qty:10,price:1001,uk_fk:1},
  //     {id:13, productName:'Sha1',qty:100,price:1002,uk_fk:1}
  //   ];
  //   let response;
  //   spyOn(service,'updateOrder').and.returnValue(of(mockresponse1));
  //   service.updateOrder(mockresponse1);

  //  //expect(response).toEqual(mockresponse);
  // });
  it('make expected call updateorder', () => {
    let mockresponse=[
      {id:1, productName:'Namo',qty:1,uk_fk:1},
      {id:2, productName:'Om',qty:10,uk_fk:1},
      {id:1, productName:'Shashank',qty:100,uk_fk:1}
    ];
    service.updateOrder(mockresponse).subscribe(orders => {
     // expect(orders.length).toBe(3);
      expect(orders).toEqual(mockresponse);
    });
  
    const req=  httpMock.expectOne("http://localhost:9090/updateorder");
    expect(req.request.method).toBe('PUT');
  req.flush(mockresponse);

  });

  it('make expected call filterreocrd', () => {
    let mockresponse=[
      {id:1, productName:'Namo',qty:1,uk_fk:1},
      {id:2, productName:'Om',qty:10,uk_fk:1},
      {id:1, productName:'Shashank',qty:100,uk_fk:1}
    ];
    service.filterRecord('1').subscribe(orders => {
     
      expect(orders).toEqual(mockresponse);
    });
  
    const req=  httpMock.expectOne("http://localhost:9090/filterorder?id=1");
    expect(req.request.method).toBe('GET');
  req.flush(mockresponse);

  });
  it('make expected call delete record', () => {
    let mockresponse=[
      {id:1, productName:'Namo',qty:1,uk_fk:1},
      {id:2, productName:'Om',qty:10,uk_fk:1},
      {id:1, productName:'Shashank',qty:100,uk_fk:1}
    ];
    service.deleteOrder('1').subscribe(orders => {
     
      expect(orders).toEqual(mockresponse);
    });
  
    const req=  httpMock.expectOne("http://localhost:9090/deleterecord?id=1");
    expect(req.request.method).toBe('DELETE');
  req.flush(mockresponse);

  });
});
