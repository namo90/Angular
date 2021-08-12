import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { OrderService } from 'src/app/services/order.service';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DashboardComponent } from './dashboard.component';
import { Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { DialogService } from 'src/app/services/dialog.service';
import { NotificationService } from 'src/app/services/notification.service';
//import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

fdescribe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let service: OrderService;
  //let httpMock: HttpTestingController;
  let userid: string = '1';
  let Orders: [] = [];
  let mockOrderService;

  const fakeOrder = {
    id: '1',

    productName: 'Apple',
    price: 100,
    qty: 2,
    ui_fk: 1

  };



  beforeEach(async () => {

    const mockSomeService = () => ({
      // getAllRecord: () => {}
      getAllRecord: () => ({
        // pipe : () =>({
        subscribe: (() => { })
        //subscribe: () => { }
        // })
      }),
      deleteOrder:()=>({
        // pipe : () =>({
        subscribe: (() => { })
        //subscribe: () => { }
        // })
      }),
      dashboardserice:()=>({
        // pipe : () =>({
        subscribe: (() => { })
        //subscribe: () => { }
        // })
      })
    })

    const matDialogStub = () => ({
      open : (BaseModalComponent: any, object: any) =>({})
    })
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [RouterTestingModule, HttpClientModule, MatSnackBarModule, MatDialogModule],

      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: OrderService, useFactory: mockSomeService },
        { provide: DialogService, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        { provide: NotificationService, useValue: {} },
        { provide: Router, useValue: {} },
        {provide: MatDialog,useFactory:matDialogStub}

      ],

    })
      .compileComponents();
    spyOn(DashboardComponent.prototype, 'getAllRecord');
    spyOn(DashboardComponent.prototype, 'getLoggedin');
    spyOn(DashboardComponent.prototype, 'ondelete');
    spyOn(DashboardComponent.prototype, 'openDialogBox');
   //  spyOn(DashboardComponent.prototype, 'open');
  });



  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    //  mockOrderService= jasmine.createSpyObj(['getAllRecord']);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call dashboard', () => {


    const apiServiceStub: OrderService = fixture.debugElement.injector.get(OrderService);

    spyOn(apiServiceStub, 'getAllRecord').and.returnValue(of([{ fakeOrder }]));
    (<jasmine.Spy>component.getAllRecord).and.callThrough();

    component.getAllRecord('1');

    expect(apiServiceStub.getAllRecord).toHaveBeenCalledWith(fakeOrder.id);

  })

  it('should call edit', () => {
    const fakeOrder = {
      id: '1',
  
      productName: 'Apple',
      price: 100,
      qty: 2,
      ui_fk: 1
  
    };

    const apiServiceStub: OrderService = fixture.debugElement.injector.get(OrderService);

    spyOn(apiServiceStub, 'dashboardserice').and.returnValue();
   // (<jasmine.Spy>component.onedit).and.callThrough();

    component.onedit(fakeOrder);

    expect(apiServiceStub.dashboardserice).toHaveBeenCalled;

  })

  it('should call delete', () => {
const msg="delete successfully";

    const apiServiceStub: OrderService = fixture.debugElement.injector.get(OrderService);

    spyOn(apiServiceStub, 'deleteOrder').and.returnValue(of({msg}));
    //(<jasmine.Spy>component.ondeleterecord).and.callThrough();

    component.ondeleterecord('delete successfully');

    expect(apiServiceStub.deleteOrder).toHaveBeenCalledWith(msg);

  })

 

  //  it('should call openDialog', () => {
  //   const fixture = TestBed.createComponent(DashboardComponent);
  //   const app = fixture.componentInstance;
  //   app.openDialog(app);
  // })

  // it('...', () => {
  //   spyOn(mockSomeService, 'getAllRecord').and.callFake(()=>{
  //     return of({
  //       "statuscode":200
  //     })
  //   })
  //   // do stuff
  //   expect(mockSomeService.getAllRecord()).toHaveBeenCalled();
  // })

  //   it('should be retrive all orders', () => {
  //     // expect(service).toBeTruthy();
  //     const dummyOrders=[
  //      {
  //        orderId: 1,
  //        orderName: 'mobile',
  //        orderDescription: 'iphone',
  //        orderAmount: 10000,
  //        deliveryAddress: 'pune',
  //        mobileNumber: '0123446789',
  //        emailID: 'string@gmail.com'
  //      },
  //      {
  //        orderId: 2,
  //        orderName: 'tv',
  //        orderDescription: 'sony',
  //        orderAmount: 100000,
  //        deliveryAddress: 'pune',
  //        mobileNumber: '0123446789',
  //        emailID: 'string@gmail.com'
  //      }
  //    ];
  //    const fixture=TestBed.createComponent(DashboardComponent);
  //    const app= fixture.componentInstance;
  //    let service=fixture.debugElement.injector.get(OrderService);
  //    spyOn(mockSomeService,'getAllRecord').and.returnValue(of({}));
  //    app.getAllRecord('1');
  //   //  service.getAllRecord(userid).subscribe(orders => {
  //   //    expect(orders.length).toBe(2);
  //   //    expect(orders).toEqual(dummyOrders);
  //   //  });

  // //    const request=httpMock.expectOne(service.getAllRecord(userid));
  // //    expect(request.request.method).toBe('GET');
  //  //  request.flush(dummyOrders);
  //    });

});
function HttpTestingController(HttpTestingController: any): any {
  throw new Error('Function not implemented.');
}

function mockObj(mockObj: any) {
  throw new Error('Function not implemented.');
}

function user(user: any, arg1: string) {
  throw new Error('Function not implemented.');
}

