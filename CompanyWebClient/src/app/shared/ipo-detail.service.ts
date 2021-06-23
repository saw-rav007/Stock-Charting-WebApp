import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IpoDetail } from './ipo-detail.model';

@Injectable({
  providedIn: 'root'
})
export class IpoDetailService {

  constructor(private http:HttpClient) { }

  IpoformData:IpoDetail = new IpoDetail();
  Ipolist : IpoDetail[];

  readonly baseURL = 'https://localhost:5001/api/ipo'

  postIpoDetails(){
    return this.http.post(this.baseURL,this.IpoformData);

  }

  putIpoDetails(){
    return this.http.put(`${this.baseURL}/${this.IpoformData.IpoId}`,this.IpoformData);

  }

  deleteCompanyDetails(id:number)
  {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList(){
    this.http.get(this.baseURL)
      .toPromise()
      .then(res => this.Ipolist = res as IpoDetail[]);
  }



}
