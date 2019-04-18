import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {RouterModule, Routes} from "@angular/router";
import { SignUpComponent } from './sign-up/sign-up.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { FindComponent } from './find/find.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [{
  path:'',
  redirectTo:'/main',
  pathMatch:'full'
},{
  path:"main",
  component: MainComponent
},{
  path:"sign-in",
  component: SignInComponent
},{
  path:"sign-up",
  component:SignUpComponent
},
  {
    path:"find",
    component: FindComponent
  }];
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    MainComponent,
    FooterComponent,
    NavComponent,
    FindComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
