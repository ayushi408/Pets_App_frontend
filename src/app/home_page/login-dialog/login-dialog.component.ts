import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import FormBuilder
//import { MatSnackBar } from '@angular/material/snack-bar';
//import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar'; // Import MatSnackBarRef
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})

export class LoginDialogComponent {
  loginForm: FormGroup; // Declare the loginForm as a FormGroup
  isLoginFormVisible: boolean = true;
  //snackBarRef!: MatSnackBarRef<any>;

  constructor(
    private formBuilder: FormBuilder, // Inject FormBuilder
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    //private snackBar: MatSnackBar
    
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
   
  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form submitted:', this.loginForm.value);
      this.closeLoginForm();

      // this.snackBar.open('Form submitted successfully', 'Close', {
      //   duration: 3000, 
      //   panelClass: ['snackbar-success'], 
      // });

      // this.snackBarRef.afterDismissed().subscribe(() => {
      
      //   this.dialogRef.close();
      // });
    } else {
      console.log('Form is invalid. Please correct the errors.');
    }
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(LoginDialogComponent, dialogConfig);
  }
  
  close() {
    this.dialogRef.close();
  }
  closeLoginForm() {
    
    this.isLoginFormVisible = false;
  }
}