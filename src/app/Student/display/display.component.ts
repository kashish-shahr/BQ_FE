
import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Student } from '../Student.model';
import { StudentService } from '../student.service';




@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private _student:StudentService,private _router:Router){
    this.dataSource=new MatTableDataSource<Student>();
  }
  displayedColumns: string[] = ['id','name','age' ,'weight','action'];
  
  // dataSource = STUDENT_DATA;
  loading:boolean=true;
  dataSource: MatTableDataSource<Student>;
  Students:Student[]=[];
  ngOnInit(): void {

    this.refresh();
  }
  private  refresh() {
    
    this._student.getAllStudents().subscribe((data: any) => {
        if(data.length>=1){
         this.Students=data;
         this.Students.sort((s1,s2)=>s1.Id-s2.Id); 
        this.dataSource.data = this.Students;
        
        this.loading=false;
        }
      });
     
  }
  addStudent(){
    this._router.navigate(['/addStudent']);
  }
  goToCharts(){
    this._router.navigate(['/displayAllCharts']);
  }
  goToEditPage(student_id){
    this._router.navigate(['/editStudent',student_id]);
  }
  deleteAStudent(student_id){
    if (confirm("do you want to delete?")) {
      let x: number = this.Students.indexOf(student_id);
      this._student.deleteStudent(student_id).subscribe(
        (data: any) => {
          this.Students.splice(x, 1);
          this.dataSource.data = this.Students;
        }
      );
      this._router.navigate(['/']);
  }
}
}
