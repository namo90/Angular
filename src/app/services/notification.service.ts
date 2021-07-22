import { Injectable } from '@angular/core';

import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public matsnackbar: MatSnackBar) { }

  config: MatSnackBarConfig = {
    duration: 59000,
    horizontalPosition: 'right',
    verticalPosition: 'top'
  }

  success(msg: any) {
    this.config['panelClass'] = ['notification', 'success'];
    this.matsnackbar.open(msg, '', this.config);
  }

  delete(msg:any){
    this.config['panelClass'] = ['notification', 'delete'];
    this.matsnackbar.open(msg, '', this.config);
  }
  loginSuccess(msg:any){
    this.config['panelClass'] = ['notification', 'loginSuccess'];
    this.matsnackbar.open(msg, '', this.config);
  }
  Notvalid(msg:any){
    this.config['panelClass'] = ['notification', 'Notvalid'];
    this.matsnackbar.open(msg, '', this.config);

  }
  logoutSuccess(msg:any){
    this.config['panelClass'] = ['notification', 'logoutSuccess'];
    this.matsnackbar.open(msg, '', this.config);

  }
}
