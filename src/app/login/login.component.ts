import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  acno="Account Number Please!"        //declare variables given in ngModel in html pages
  pwd=""

  

  constructor(private router:Router,private dataService:DataService) { }           //dependancy injection (setting router)

  ngOnInit(): void {
  }
  

  login(){

    var accno=this.acno;
    var pswd=this.pwd;
    
    const result=this.dataService.login(accno,pswd);

    if (result){
      alert("login successfull");
      this.router.navigateByUrl('dashboard'); 
    }
  }

  register(){
    this.router.navigateByUrl('register');        //linking to register page
  }
}
