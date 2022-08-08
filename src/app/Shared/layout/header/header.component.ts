import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _router:Router) { }
  localStorageFlag:boolean=true;
  ngOnInit(): void {
    console.log(this.localStorageFlag)
    if(localStorage.getItem("plant")!=null)
    {
      this.localStorageFlag=false;
    }
    else{
      this.localStorageFlag=true;
    }
  }
  onLogout(){
    localStorage.clear();
    
    this._router.navigate(['login']);
    
  }
}
