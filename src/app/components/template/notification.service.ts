import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackbar : MatSnackBar){ 
   
  }

    
  showMessage(msg:string):void{
    this.snackbar.open(msg,'x',{
      duration:3000,
      horizontalPosition:'right',
      verticalPosition:'top'
    })
  } 
}
