//import { Component } from '@angular/core';
// import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { Component, OnInit } from '@angular/core';


// @Component({
//   selector: 'app-signup-dialog',
//   templateUrl: './signup-dialog.component.html',
//   styleUrls: ['./signup-dialog.component.scss']
// })
// export class SignupDialogComponent implements OnInit{
//   signupForm: FormGroup;
//   constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<SignupDialogComponent>, private formBuilder: FormBuilder) {}
//   ngOnInit() {
//     this.signupForm = this.formBuilder.group({
//       firstName: ['', Validators.required],
//       lastName: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(8)]]
//     });
//   }
//   onSubmit(){
//     if (this.signupForm.valid) {
      
//       console.log('Form submitted:', this.signupForm.value);
//     } 
//     else
//     {
//       console.log('Form is invalid. Please correct the errors.');
//     }
//   }

//   openDialog() {
//     const dialogConfig = new MatDialogConfig();
//     this.dialog.open(SignupDialogComponent, dialogConfig);
//   }
//   close() {
//     this.dialogRef.close();
//   }
// }



import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms'; // Import FormBuilder
import { Component, OnInit } from '@angular/core';


function firstNameValidator(control: AbstractControl) {
  const value = control.value;
  if (value && value.length < 2) {
    return { firstName: true, message: 'First name must be at least 2 characters long' };
  }
  return null;
}

function lastNameValidator(control: AbstractControl) {
  const value = control.value;
  if (value && value.length < 2) {
    return { lastName: true, message: 'Last name must be at least 2 characters long' };
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

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<SignupDialogComponent>,
    private formBuilder: FormBuilder // Inject FormBuilder
  ) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required, firstNameValidator]],
      lastName: ['', [Validators.required, lastNameValidator]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Form submitted:', this.signupForm.value);
    } else {
      console.log('Form is invalid. Please correct the errors.');
    }
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(SignupDialogComponent, dialogConfig);
  }

  close() {
    this.dialogRef.close();
  }
}
