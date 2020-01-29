import { Component, OnInit } from '@angular/core';
import { PaymentsService } from 'src/app/shared/payments.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styles: []
})
export class PaymentsComponent implements OnInit {

  constructor(private service: PaymentsService,
    private toastr: ToastrService) { }
  


  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form != null)
    form.resetForm();
    this.service.formData = {
      PMId: 0,
      CardOwnerName: '',
      CardNumber: '',
      ExpirationDate: '',
      CVVNumber: ''
    }
  }

 onSubmit(form: NgForm){
   if(form.value.PMId==0)
   console.log(form)
   if(!this.service.formData.PMId)
   this.insertRecord(form);
  else
  this.updateRecord(form);
  this.resetForm(form);
  this.service.refreshlist();

  
 }


 insertRecord(form: NgForm){
  this.service.postPayments(form.value).subscribe(
    res => {
      this.resetForm(form);
      this.toastr.success('Submitted Successfully! ', "Payment Detail Registered.")
      this.service.refreshlist();
    },
    err => {
      console.log(err);
    }
   )

 }
 updateRecord(form: NgForm){
  this.service.putPayments(form.value).subscribe(
    res => {
      this.resetForm(form);
      this.toastr.success('Edited Successfully ', 'Payment Detail Registered.')
      this.service.refreshlist();
    },
    err => {
      console.log(err);
    }
   )

 }

}