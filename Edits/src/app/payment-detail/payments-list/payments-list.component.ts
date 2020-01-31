import { Component, OnInit } from '@angular/core';
import { PaymentsService } from 'src/app/shared/payments.service';
import { Payments } from 'src/app/shared/payments.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payments-list',
  templateUrl: './payments-list.component.html',
  styles: []
})
export class PaymentsListComponent implements OnInit {

  constructor(private service: PaymentsService, private toastr: ToastrService) { }

  ngOnInit() {
  
    this.service.refreshlist();

  }
 populateForm(pd:Payments){
   this.service.formData= Object.assign({},pd);
 }

 onDelete(PMId){debugger;
   if (confirm('Are you sure about deleting this record?')){
   this.service.deletePayments(PMId)
  .subscribe(res => {
   
    this.service.refreshlist();
    this.toastr.warning("Deleted Successfully",'Payments Register');
  },
    err => {
    console.log(err)
    })
  }
 }
}