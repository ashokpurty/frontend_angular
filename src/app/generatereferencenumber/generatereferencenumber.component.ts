import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReferenceNumber } from '../reference-number';
import { ReferenceNumberValidatorComponent } from '../reference-number-validator/reference-number-validator.component';

@Component({
  selector: 'app-generatereferencenumber',
  templateUrl: './generatereferencenumber.component.html',
  styleUrls: ['./generatereferencenumber.component.css'],
  providers: [ReferenceNumberValidatorComponent]
})

export class GeneratereferencenumberComponent implements OnInit {

  constructor(private httpService: HttpClient) { }

  ngOnInit() {
  }

  model = new ReferenceNumber("","");
  submitted = false;
  result: string;

  onSubmit() { this.submitted = true; }

  CallApiService() {
    this.result = this.model.input ;
    this.httpService.get('http://localhost:9009/api/Calculator/' + this.model.input).subscribe(
    data => {
      debugger;
    this.model.output = this.result + data as string;
    }
  );
  }
}


