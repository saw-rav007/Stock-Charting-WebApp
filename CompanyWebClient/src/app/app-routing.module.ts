import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { AuthenticationComponent } from './authentication/authentication.component';

const routes: Routes=[
  { path: '', component: AuthenticationComponent },
  {path:'create', component: CompanyDetailsComponent},
  {path: '**', redirectTo:'', pathMatch:'full'}
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
