import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IpoDetail } from 'src/app/shared/ipo-detail.model';
import { IpoDetailService } from 'src/app/shared/ipo-detail.service';

@Component({
  selector: 'app-ipo-details-form',
  templateUrl: './ipo-details-form.component.html',
  styleUrls: ['./ipo-details-form.component.css']
})
export class IpoDetailsFormComponent implements OnInit {

  constructor(public service:IpoDetailService, private toaster:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    //if(this.service.IpoformData.IpoId==0)
      this.insertRecord(form);
    // else
    //   this.updateRecord(form);
    
  }

  insertRecord(form:NgForm)
  {
    this.service.postIpoDetails().subscribe(
      res=>{
        this.resetForm(form);
        this.service.refreshList();
        this.toaster.success("Submitted Successfully!","IPO Detail Register")
      },
      err=>{console.log(err)}
    )  
  }


  updateRecord(form:NgForm)
  {
    this.service.putIpoDetails().subscribe(
      res=>{
        this.resetForm(form);
        this.service.refreshList()
        this.toaster.info("Updated Successfully!","IPO Detail Register")
      },
      err=>{console.log(err)}
    )
   
  }

  resetForm(form:NgForm)
  {
    form.form.reset();
    this.service.IpoformData = new IpoDetail();
  }

}
