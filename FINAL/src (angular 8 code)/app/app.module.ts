import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';
import { PaymentsComponent } from './payment-detail/payments/payments.component';
import { PaymentsListComponent } from './payment-detail/payments-list/payments-list.component';
import { PaymentsService } from './shared/payments.service';

@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailComponent,
    PaymentsComponent,
    PaymentsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PaymentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
