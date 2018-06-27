import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GeneratereferencenumberComponent } from './generatereferencenumber/generatereferencenumber.component';
import { ReferenceNumberValidatorComponent } from './reference-number-validator/reference-number-validator.component';


@NgModule({
  declarations: [
    AppComponent,
    GeneratereferencenumberComponent,
    ReferenceNumberValidatorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
