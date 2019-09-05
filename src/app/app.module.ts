import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {Router, RouterModule, Routes} from "@angular/router";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { IndexComponent } from './index/index.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { ChatComponent } from './chat/chat.component';

const appRoutes:Routes = [
  {path:'login',
  component:LoginComponent},
  {path:'register',
  component:RegisterComponent},
  {path:'chat',
  component:ChatComponent},
  {path:'**',
  component:IndexComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
