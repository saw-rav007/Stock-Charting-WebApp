import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { UserComponent } from './signup/user/user.component';
import { RegistrationComponent } from './signup/user/registration/registration.component';

const routes: Routes=[
  {path: '', redirectTo:'user/registration', pathMatch:'full'},
  { path: 'user', component: UserComponent,
  children: [
    { path: 'registration',  component: RegistrationComponent}
  ]},
  { path:'create', component: CompanyDetailsComponent}
 
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
