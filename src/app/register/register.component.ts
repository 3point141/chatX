import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http:HttpClient, private router:Router) { }

  register:register={
    username:'',
    password:''
  };

  userNameAvailable:boolean = null;

  ngOnInit() {
  }

  registerNewUser() {
    let url = 'http://localhost:8080/registerNew';
    this.http.post<boolean>(url,this.register).subscribe(
      res=>{
        alert("success");
        this.router.navigate(['login']);
      },error => {
        alert("db Error");
      }
    )
  }

  checkAvailability() {
    let url = 'http://localhost:8080/checkAvailability/' + this.register.username;
    if (this.register.username.length > 1) {
      this.http.post<boolean>(url, this.register.username).subscribe(
        res => {
          if (res) {
            console.log("available");
            this.userNameAvailable = res;
          } else {
            console.log("not available");
            this.userNameAvailable = res;
          }
        }, err => {
          alert("dB not reachabe");
        }
      )
    }
  }


}

export interface register {
  username:string;
  password:string;
}
