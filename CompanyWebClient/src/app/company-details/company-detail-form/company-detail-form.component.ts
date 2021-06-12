import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';
import { CompanyDetail } from 'src/app/shared/company-detail.model';
import { CompanyDetailService } from 'src/app/shared/company-detail.service';

@Component({
  selector: 'app-company-detail-form',
  templateUrl: './company-detail-form.component.html',
  styles: [
  ]
})
export class CompanyDetailFormComponent implements OnInit {

  constructor(public service:CompanyDetailService, private toaster:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    if(this.service.formData.id==0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
    
  }

  insertRecord(form:NgForm)
  {
    this.service.postCompanyDetails().subscribe(
      res=>{
        this.resetForm(form);
        this.service.refreshList();
        this.toaster.success("Submitted Successfully!","Company Detail Register")
      },
      err=>{console.log(err)}
    )  
  }


  updateRecord(form:NgForm)
  {
    this.service.putCompanyDetails().subscribe(
      res=>{
        this.resetForm(form);
        this.service.refreshList()
        this.toaster.info("Updated Successfully!","Company Detail Register")
      },
      err=>{console.log(err)}
    )
   
  }

  resetForm(form:NgForm)
  {
    form.form.reset();
    this.service.formData = new CompanyDetail();
  }

}
