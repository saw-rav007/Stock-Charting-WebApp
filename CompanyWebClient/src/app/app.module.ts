import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyDetailFormComponent } from './company-details/company-detail-form/company-detail-form.component';
import {  HttpClientModule } from '@angular/common/http';
import { UserNavBarComponent } from './navbar/user-nav-bar/user-nav-bar.component';
import { AdminNavBarComponent } from './navbar/admin-nav-bar/admin-nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { UserComponent } from './signup/user/user.component';
import { RegistrationComponent } from './signup/user/registration/registration.component';
import { UserService } from './shared/user.service';
import { LoginComponent } from './signup/user/login/login.component';
import { HomeComponent } from './navbar/home/home.component';
import { IpoDetailsComponent } from './ipo-details/ipo-details.component';
import { IpoDetailsFormComponent } from './ipo-details/ipo-details-form/ipo-details-form.component';
import { ImportExcelComponent } from './import-excel/import-excel.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyDetailsComponent,
    CompanyDetailFormComponent,
    UserNavBarComponent,
    AdminNavBarComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    IpoDetailsComponent,
    IpoDetailsFormComponent,
    ImportExcelComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      progressBar: true
    }), AppRoutingModule,  // ToastrModule added
    RouterModule,ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
