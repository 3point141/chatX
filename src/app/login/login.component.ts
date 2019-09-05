import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit() {
  }

  user:user={
    username:'',
    password:''
};

  checkLogin:boolean=null;


  validateLogin() {
    let url = 'http://localhost:8080/login/api';
    this.http.post<boolean>(url,this.user).subscribe(
      res=>{
        if(res){
          sessionStorage.setItem("username",this.user.username);
          this.router.navigate(['chat']);
          this.checkLogin = true;
        }else {
          this.checkLogin = false;
        }
      },
      err=>{
        alert("dB not reachable");
      }
    )
  }
}

export interface user{
  username:string;
  password:string;
}
