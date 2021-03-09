import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterControlComponent } from './counter-control/counter-control.component';
import { PsbInputComponent } from './psb-input/psb-input.component';
import { QuantityComponent } from './quantity/quantity.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterControlComponent,
    PsbInputComponent,
    QuantityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
