import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './home_page/navbar/navbar.component';
import { LoginDialogComponent } from './home_page/login-dialog/login-dialog.component';
import { SignupDialogComponent } from './home_page/signup-dialog/signup-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupService } from './services/signup.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupDialogComponent,
    LoginDialogComponent
  ],
  imports: [
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatSnackBarModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  
  ],
  providers: [SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
