import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IpoDetail } from '../shared/ipo-detail.model';
import { IpoDetailService } from '../shared/ipo-detail.service';

@Component({
  selector: 'app-ipo-details',
  templateUrl: './ipo-details.component.html',
  styleUrls: ['./ipo-details.component.css']
})
export class IpoDetailsComponent implements OnInit {

  constructor(public service: IpoDetailService, public toastr:ToastrService) { }


  ngOnInit(): void {
    this.service.refreshList();
  }
  
  populateForm(selectedRecord: IpoDetail)
  {
     this.service.IpoformData = Object.assign({},selectedRecord);
  }

  onDelete(id:number)
  {
    if(confirm("Are sure want to delete this record?"))
    {
      this.service.deleteCompanyDetails(id)
      .subscribe(
        res=>{
          this.toastr.error("Item Delted Successfully!","IPO Detail Register")
          this.service.refreshList()
        },
        err=>{
          console.log(err);
        }
      )
    }
  }

}
