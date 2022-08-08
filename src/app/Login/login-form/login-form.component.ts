import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDataService } from '../login-data.service';


interface Plant {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  hide = true;
  plantsData:Plant[];
  fg_login:FormGroup;
  constructor(private _router:Router,private _loginService:LoginDataService) { 
    this.fg_login=new FormGroup({
      email:new FormControl("abc@gmail.com", [Validators.required, Validators.email]),
      plant: new FormControl(null, [Validators.required]),
      password:new FormControl("adsf",[Validators.required])
    });
    
  }
  getErrorMessage() {
    if (this.fg_login.value.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.fg_login.value.email.hasError('email') ? 'Not a valid email' : '';
  }
  
  ngOnInit(): void {
    localStorage.clear();
    
this._loginService.getAllPlants().subscribe((plantData:Plant[])=>{
this.plantsData=plantData;
});
  }
  onSubmit():void{
    let body=this.fg_login.value;
    
    console.log(body.plant);
    localStorage.setItem("plant",body.plant);
    this._router.navigate(['']);
    
  }
}
