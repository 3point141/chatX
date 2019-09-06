import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit() {
    this.getAllMessages();
  }


  checkMessage() {
      setTimeout(this.getAllMessages,2000);
  }


  chat:Chat = {
    username:sessionStorage.getItem('username'),
    message:''
  };

  chats:Chat[]= [];

  sendNewMessage() {
    let url = 'http://localhost:8080/chat';
    this.http.post<Chat[]>(url,this.chat).subscribe((data:any)=>{
      this.chats = data;
      this.ngOnInit();
    },error => {
      alert("dB not reachable");
    })
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

  getAllMessages(){
    let url = 'http://localhost:8080/history';
    this.http.get(url).subscribe((data:any)=>{
      if(data!==this.chats)
      {
        this.chats = data;
        this.ngOnInit();
      }
      else
        this.checkMessage();
    })
  }

}

export interface Chat {
  username:string;
  message:string;
}
