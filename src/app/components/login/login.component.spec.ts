import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginServiceService } from 'src/app/services/login-service.service';
import {of} from 'rxjs';
import { LoginComponent } from './login.component';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginservice:LoginServiceService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ RouterTestingModule,HttpClientModule,MatSnackBarModule ],
      providers:[LoginServiceService]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    loginservice=TestBed.get(LoginServiceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should assert "dologin" has been called',()=>{
   let user= component.logincredentails.username='namo';
  let pwd=  component.logincredentails.password='12345';

     spyOn(loginservice, 'doLogin').and.returnValue(of({}));
   let login= component.onSubmit();
 //  expect(login).toEqual(true);
 expect(loginservice.doLogin(component.logincredentails)).toHaveBeenCalled();
  });
});
