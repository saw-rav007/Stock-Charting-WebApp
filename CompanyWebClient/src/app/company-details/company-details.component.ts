import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CompanyDetail } from '../shared/company-detail.model';
import { CompanyDetailService } from '../shared/company-detail.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styles: [
  ]
})
export class CompanyDetailsComponent implements OnInit {

  constructor(public service: CompanyDetailService, public toastr:ToastrService ) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
  
  populateForm(selectedRecord: CompanyDetail)
  {
     this.service.formData = Object.assign({},selectedRecord);
  }

  onDelete(id:number)
  {
    if(confirm("Are sure want to delete this record?"))
    {
      this.service.deleteCompanyDetails(id)
      .subscribe(
        res=>{
          this.toastr.error("Item Delted Successfully!","Company Detail Register")
          this.service.refreshList()
        },
        err=>{
          console.log(err);
        }
      )
    }
  }

}
