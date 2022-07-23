import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { AppService } from './app.service';


export class Student {
  constructor(
    public id:number,
  public name: string,
  public age: number,
  public weight: number,
  ){}
}

/**
 * @title Basic use of `<table mat-table>`
 */
 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _student:AppService){
    this.dataSource=new MatTableDataSource<Student>();
  }
  i:number=1;
  title = 'BQ_FE';
  displayedColumns: string[] = ['id','name','age' ,'weight'];
  Students:Student[]=[];
  // dataSource = STUDENT_DATA;
  dataSource: MatTableDataSource<Student>;
loading:boolean=false;
  formGroup=new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),
    age:new FormControl(''),
    weight:new FormControl('')
  });
  
  ngOnInit(){
    this.refresh();
  }
  submitStudent(){
    let body=this.formGroup.value;
    this._student.addStudent(body).subscribe(data=>console.log("data",data));
  }
   private async refresh() {
    this.loading=true;
    console.log(this.loading)
     await this._student.getAllStudents().subscribe(
       (data: any) => {
         // console.log(data);
         this.Students = data;
         this.dataSource.data = this.Students;
         console.log(this.dataSource.data);
       });
       this.loading=false;
   }
}

