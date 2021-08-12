import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ExcelreadeComponent } from './excelreade/excelreade.component';
import { OrderComponent } from './order/order.component';
import { OrderplaceComponent } from './orderplace/orderplace.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:"login",
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:"dashboard",
    component:DashboardComponent,
    pathMatch:'full',
   canActivate:[AuthGuard]
  },
  {
    path:"orderplace",
    component:OrderplaceComponent,
    pathMatch:'full',
   canActivate:[AuthGuard]
  },
  {
    path:"order",
    component:OrderComponent,
    pathMatch:'full'
  //  canActivate:[AuthGuard]
  },
  {
    path:"excelreader",
    component:ExcelreadeComponent,
    pathMatch:'full'
  //  canActivate:[AuthGuard]
  },
  {
    path:"employees",
    component:EmployeesComponent,
    pathMatch:'full'
  //  canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
