import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent implements OnInit {

  constructor() { }
  formControlNames=[
    {name:"inverter_reading",type:"number",placeholder:"0"}
  ]
  ngOnInit(): void {
    console.log(this.formControlNames)
  }

}
