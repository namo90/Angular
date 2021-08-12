import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';

import { OrderplaceComponent } from './orderplace.component';
import { of } from 'rxjs';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { OrderService } from '../services/order.service';
import { LoginServiceService } from '../services/login-service.service';
import { NotificationService } from '../services/notification.service';
import { Router } from '@angular/router';
fdescribe('OrderplaceComponent', () => {
  let component: OrderplaceComponent;
  let fixture: ComponentFixture<OrderplaceComponent>;
  let de:DebugElement;
  let le:HTMLElement;

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
        
        subscribe: (() => { })
       
      }),

      updateOrder:() => ({
        
        subscribe: (() => { })
       
      }),
      saveOrder:() => ({
        
        subscribe: (() => { })
       
      })
     
    })

    await TestBed.configureTestingModule({
      declarations: [ OrderplaceComponent ],
      imports: [ RouterTestingModule,HttpClientModule,MatDialogModule],
      providers: [
      
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: OrderService, useFactory: mockSomeService },
        { provide: LoginServiceService, useValue: {} },
      //  { provide: MatDialogRef, useValue: {} },
        { provide: NotificationService, useValue: {} },
        { provide: Router, useValue: {} },
        {provide: MatDialog,useValue:{}},
        {provide:MatDialogRef,useValue:{}}
      
      ]
    })
    .compileComponents();
    spyOn(OrderplaceComponent.prototype, 'getLoggedin');
    spyOn(OrderplaceComponent.prototype, 'editPopValue');
    spyOn(OrderplaceComponent.prototype, 'Update');
    spyOn(OrderplaceComponent.prototype, 'onSubmit');
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should call closeDialog method', () => {
  //   component.closeDialog();
  //  });

  it('should call onlynumber', () => {


    // const apiServiceStub: OrderService = fixture.debugElement.injector.get(OrderService);

    // spyOn(apiServiceStub, 'getAllRecord').and.returnValue(of([{ fakeOrder }]));
   // (<jasmine.Spy>component.onlyNumberAllowed).and.callThrough();

    component.onlyNumberAllowed('1');

    expect(component.onlyNumberAllowed).toHaveBeenCalled;

  })

  it('should call update', () => {


     const apiServiceStub: OrderService = fixture.debugElement.injector.get(OrderService);

    spyOn(apiServiceStub, 'updateOrder').and.returnValue(of(fakeOrder));
    (<jasmine.Spy>component.Update).and.callThrough();

    component.Update();

    expect(apiServiceStub.updateOrder).toHaveBeenCalled;

  })

  it('should call save', () => {


    const apiServiceStub: OrderService = fixture.debugElement.injector.get(OrderService);

   spyOn(apiServiceStub, 'saveOrder').and.returnValue(of(fakeOrder));
   (<jasmine.Spy>component.onSubmit).and.callThrough();

   component.onSubmit();
   
   expect(apiServiceStub.saveOrder).toHaveBeenCalled;

 })


});
