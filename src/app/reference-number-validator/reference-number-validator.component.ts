import { Component, OnInit } from '@angular/core';
import { ReferenceNumber } from '../reference-number';

import {  
  ReactiveFormsModule,  
  NG_VALIDATORS,  
  FormsModule,  
  FormGroup,  
  FormControl,  
  ValidatorFn,  
  Validator  
 } from '@angular/forms';  

 import { Directive } from '@angular/core';

 @Directive({  
  selector: '[referenceNumberValidator][ngModel]',  
  providers: [  
   {  
    provide: NG_VALIDATORS,  
    useExisting: ReferenceNumberValidatorComponent,  
    multi: true  
   }  
  ]  
 })

@Component({
  selector: 'app-reference-number-validator',
  templateUrl: './reference-number-validator.component.html',
  styleUrls: ['./reference-number-validator.component.css']
})

export class ReferenceNumberValidatorComponent implements Validator {
  validator: ValidatorFn;
  constructor() {  
     this.validator = this.referenceNumberValidator();  
    }
  validate(c: FormControl) {  
     return this.validator(c);  
    }
    referenceNumberValidator(): ValidatorFn {  
     return (c: FormControl) => { 
      let isValid = Number(c.value);  
      if (isValid) {  
       return null;  
      } else {  
       return {  
        referenceNumberValidator: {  
         valid: false  
        }  
       };  
      }  
     }  
    }  
   }