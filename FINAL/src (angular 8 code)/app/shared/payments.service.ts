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

 

  constructor(private http:HttpClient) { }

  postPayments(formData: Payments){
  return  this.http.post(this.rootURL+'/PaymentDetail',formData)

  }
}
