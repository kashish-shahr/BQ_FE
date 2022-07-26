import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {  StudentService } from '../student.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private _student:StudentService,private _router:Router){
  
  }

  formGroup=new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),
    age:new FormControl(''),
    weight:new FormControl('')
  });
  ngOnInit(): void {
  }
  submitStudent(){
    let body=this.formGroup.value;
    this._student.addStudent(body).subscribe((studentData=>{
      this._router.navigate(['/']);
    }));
  }
}
