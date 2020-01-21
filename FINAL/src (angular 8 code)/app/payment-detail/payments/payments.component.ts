import { Component, OnInit } from '@angular/core';
import { PaymentsService } from 'src/app/shared/payments.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styles: []
})
export class PaymentsComponent implements OnInit {

  constructor(private service: PaymentsService) { }
  


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
   this.service.postPayments(form.value).subscribe(
    res => {
      this.resetForm(form);
    },
    err => {
      console.log(err);
    }
   )
 }


}
