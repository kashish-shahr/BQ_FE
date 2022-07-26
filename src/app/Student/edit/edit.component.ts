import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../Student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private _student:StudentService,private _act:ActivatedRoute,private _router:Router){
  
  }
  student_id:number;
  formGroup:FormGroup;
  
  ngOnInit(): void {
    this.student_id=this._act.snapshot.params['student_id'];
    this.formGroup=new FormGroup({
      Id:new FormControl(''),
     Name:new FormControl(''),
     Age:new FormControl(''),
     Weight:new FormControl('')
    });
    this._student.getStudentbyId(this.student_id).subscribe((studentData:Student)=>{
      
      this.editStudentDataBind(studentData[0]);
    });
  }
  editStudentDataBind(studentData:Student){
    this.formGroup.patchValue({
      Id:studentData.Id,
      Name:studentData.Name,
      Age:studentData.Age,
      Weight:studentData.Weight
    });
    console.log(studentData);
    console.log(this.formGroup.value);
  }
  submitStudent(){
    let body=this.formGroup.value;
    this._student.updateStudent(body).subscribe((studentData=>{
      this._router.navigate(['/']);
    }));
  }
}
