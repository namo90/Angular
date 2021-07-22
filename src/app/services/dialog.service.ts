import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef,MatDialogConfig} from '@angular/material/dialog';
import { MatConformDialogComponent } from '../mat-conform-dialog/mat-conform-dialog.component';


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog:MatDialog) { }

  // openConformD(){
  //   const dialogconfig=new MatDialogConfig();
  //    dialogconfig.disableClose=true;
  //    dialogconfig.autoFocus=true;
  //    dialogconfig.width="60%";
  //   this.dialog.open(MatDialogConfig,dialogconfig);
 
  // }

  openDialogbox() {
    debugger;
    
   
   return this.dialog.open(MatConformDialogComponent, {
      // height: '10rem',
      // width: '20rem',
      width:'390px',
      panelClass:'conform-dialog-container',
      disableClose:true,
      position:{top:"10px"}
     
    });
  }
}
