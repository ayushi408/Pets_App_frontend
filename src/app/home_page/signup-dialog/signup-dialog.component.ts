import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { SignupService } from 'src/app/services/signup.service';

function firstNameValidator(control: AbstractControl) {
  const value = control.value;
  if (value && value.length < 2) {
    return { firstName: true, message: 'First name must be at least 2 characters' };
  }
  return null;
}

function lastNameValidator(control: AbstractControl) {
  const value = control.value;
  if (value && value.length < 2) {
    return { lastName: true, message: 'Last name must be at least 2 characters' };
  }
  return null;
}

@Component({
  selector: 'app-signup-dialog',
  templateUrl: './signup-dialog.component.html',
  styleUrls: ['./signup-dialog.component.scss']
})
export class SignupDialogComponent implements OnInit {
  signupForm!: FormGroup;
  isSignupFormVisible: boolean = true;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end'; 
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<SignupDialogComponent>,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private signupService: SignupService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required, firstNameValidator]],
      lastName: ['', [Validators.required, lastNameValidator]],
      email: ['', [Validators.required, Validators.email]],
      //password: ['', [Validators.required, Validators.minLength(8)]]
      password: [
        '',[
          Validators.required,
          //Validators.minLength(8),
          Validators.pattern(/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/),
        ],
      ],
    });
  }
  onSubmit() {
    if (this.signupForm.valid) {
    this.signupService.signup(this.signupForm.value).subscribe(
              (response: any) => {
                console.log('Signup response:', response);
                if (response.success) {
                  this.snackBar.open('Signup successful', 'Close', {
                    duration: 4000, 
                    panelClass: ['snackbar-success'],
                    horizontalPosition: this.horizontalPosition, 
                    verticalPosition: this.verticalPosition,  
                  });
                  this.closeSignupForm();
                } else if (response.message === 'Email already exists') {
                  this.snackBar.open('Email already exists. Please use a different email.', 'Close', {
                    duration: 4000,
                    panelClass: ['snackbar-error'],
                    horizontalPosition: this.horizontalPosition,
                    verticalPosition: this.verticalPosition,
                  });
                } else {
                  this.snackBar.open('Signed up failed, please try again', 'Close', {
                    duration: 4000,
                    panelClass: ['snackbar-error'],
                    horizontalPosition: this.horizontalPosition,
                    verticalPosition: this.verticalPosition,
                  });
                }
              },
              (error) => {
                console.error('Signup failed:', error);
                this.snackBar.open('Signup failed. Please try again.', 'Close', {
                  duration: 4000,
                  panelClass: ['snackbar-error'],
                  horizontalPosition: this.horizontalPosition,
                  verticalPosition: this.verticalPosition,
                });
              }
            );
          }
        }
  
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(SignupDialogComponent, dialogConfig);
  }

  close() {
    this.dialogRef.close();
  }

  closeSignupForm() {
    this.dialogRef.close();
  }
}


