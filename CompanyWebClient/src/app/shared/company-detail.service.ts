import { Injectable } from '@angular/core';
import { CompanyDetail } from './company-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CompanyDetailService {

  constructor(private http:HttpClient) { }

  formData:CompanyDetail = new CompanyDetail();
  list : CompanyDetail[];


  readonly baseURL = 'https://localhost:5001/api/company'

  postCompanyDetails(){
    return this.http.post(this.baseURL,this.formData);

  }

  putCompanyDetails(){
    return this.http.put(`${this.baseURL}/${this.formData.id}`,this.formData);

  }

  deleteCompanyDetails(id:number)
  {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList(){
    this.http.get(this.baseURL)
      .toPromise()
      .then(res => this.list = res as CompanyDetail[]);
  }


}
