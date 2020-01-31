import { Injectable } from '@angular/core';
import { Payments } from './payments.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  formData:Payments
  formDatax:PaymentsService;
  readonly rootURL = "http://localhost:61575/api"
  list: Payments[];

 

  constructor(private http:HttpClient) { }

  postPayments(formData: Payments){
  return  this.http.post(this.rootURL+'/PaymentDetail',this.formData)

  }

  putPayments(formData: Payments){
  return  this.http.put(this.rootURL+'/PaymentDetail/'+this.formData.PMId,this.formData)

  }

  deletePayments(id){
    return  this.http.delete(this.rootURL+'/PaymentDetail/' +id)
  
    }

  

  refreshlist(){
    this.http.get(this.rootURL+'/PaymentDetail')
    .toPromise()
    .then(res => this.list = res as Payments[])
  }
}