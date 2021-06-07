import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname=""
  acno=""
  pwd=""

  constructor(private dataService:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  register(){

    var uname=this.uname;
    var acno=this.acno;
    var pwd=this.pwd;
  
    alert("Registration Successfull");

    const result = this.dataService.register(uname,acno,pwd);
    if (result){
      alert("Registered successfull.......");
      this.router.navigateByUrl("");
    }
    else{
      alert("Account Already Exists!! Please Login")
    }
  }
}
