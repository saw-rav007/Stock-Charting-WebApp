import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { UserComponent } from './signup/user/user.component';
import { RegistrationComponent } from './signup/user/registration/registration.component';
import { LoginComponent } from './signup/user/login/login.component';
import { HomeComponent } from './navbar/home/home.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes=[
  {path: '', redirectTo:'user/login', pathMatch:'full'},
  { path: 'user', component: UserComponent,
  children: [
    { path: 'registration',  component: RegistrationComponent},
    { path: 'login',  component: LoginComponent}
  ]},
  { path:'create', component: CompanyDetailsComponent},
  {path:'home', component:AppComponent,canActivate:[AuthGuard]}
 
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
