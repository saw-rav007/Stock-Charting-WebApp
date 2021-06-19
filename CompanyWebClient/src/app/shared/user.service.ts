import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import {HttpClient} from'@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:5001/api'

  formModel = this.fb.group({
    UserName:['',Validators.required],
    Email:['',Validators.email],
    MobileNumber:['',[Validators.maxLength(10),Validators.minLength(10),Validators.pattern('[0-9]*')]],
    FullName:[''],
    Password:['',[Validators.required,Validators.minLength(4)]],
   });

  
  register(){
    var body = {
     UserName: this.formModel.value.UserName,
     Email: this.formModel.value.Email,
     FullName: this.formModel.value.FullName,
     MobileNUmber: this.formModel.value.MobileNUmber,
     Password: this.formModel.value.Password
    } 
    return this.http.post(this.BaseURI + '/ApplicationUser/Register', body);
  }
  
}
