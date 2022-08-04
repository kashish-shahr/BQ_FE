import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  step:number=1;
  id_name_fg:FormGroup;
  age_weight_fg:FormGroup;
  constructor(private _formBuilder:FormBuilder,private _student: StudentService, private _router: Router) {}

  // formGroup = new FormGroup({
  //   //id and name form
  //   id_name_fg: new FormGroup({
  //     id: new FormControl(null, [
  //       Validators.required,
  //       Validators.pattern('^[0-9]*$'),
  //     ]),
  //     name: new FormControl('', [
  //       Validators.required,
  //       Validators.pattern('[0-9a-zA-Z-/]*'),
  //     ]),
  //   }),
  //   //age and weight form
  //   age_weight_fg: new FormGroup({
  //     age: new FormControl('', [
  //       Validators.required,
  //       Validators.pattern('[0-9]*'),
  //     ]),
  //     weight: new FormControl('', Validators.required),
  //   }),
  // });
  disabled:boolean=false;
  ngOnInit(): void {

    this.id_name_fg=this._formBuilder.group({
      id: new FormControl(null, [
              Validators.required,
              Validators.pattern('^[0-9]*$'),
            ]),
            name: new FormControl('', [
              Validators.required,
              Validators.pattern('[0-9a-zA-Z-/]*'),
            ]),
    });
    this.age_weight_fg=this._formBuilder.group({
      age: new FormControl('', [
              Validators.required,
              Validators.pattern('[0-9]*'),
            ]),
            weight: new FormControl('', [Validators.required,Validators.pattern('[0-9]*'),]),
      
    });
console.warn(this.age_weight_fg.valid)
  }

  get id_name_details(){
    
    return this.id_name_fg.controls;}
  get age_weight_details(){return this.age_weight_fg.controls;}
  submitStudent() {
    
    
    console.log(this.step, this.age_weight_fg.invalid);
    
    if(this.step==2 && this.age_weight_fg.invalid){return}
      
    let id_name_body = this.id_name_fg.value;
    let age_weight_body = this.age_weight_fg.value;
    let body=Object.assign(id_name_body,age_weight_body);
    console.log(id_name_body,age_weight_body,'\n',body);
    
    this._student.addStudent(body).subscribe((studentData) => {

      this._router.navigate(['/']);
    });
  
  }

  
  onPrevious(){
    this.step--;
  }onNext(){
    if(this.step==1 && this.id_name_fg.invalid){
      return;
    }
    if(this.step==2 && this.age_weight_fg.invalid){
      return;
    }
    this.step++;
  }
}
