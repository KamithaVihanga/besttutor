import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {RouterModule, Routes} from "@angular/router";
import {SignUpComponent} from './sign-up/sign-up.component';
import {MainComponent} from './main/main.component';
import {FooterComponent} from './footer/footer.component';
import {NavComponent} from './nav/nav.component';
import {FindComponent} from './find/find.component';
import {AdminComponent} from './admin/admin.component';
import {RateComponent} from './rate/rate.component';
import {ResultsComponent} from './results/results.component';
import {TutorDetailsComponent} from './tutor-details/tutor-details.component';
import {ForumComponent} from './forum/forum.component';
import {ForumSideNavComponent} from './forum-side-nav/forum-side-nav.component';
import { ThreadComponent } from './thread/thread.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/main',
  pathMatch: 'full'
}, {
  path: "main",
  component: MainComponent
}, {
  path: "sign-in",
  component: SignInComponent
}, {
  path: "sign-up",
  component: SignUpComponent
}, {
  path: "find",
  component: FindComponent
}, {
  path: "rate",
  component: RateComponent
}, {
  path: "results",
  component: ResultsComponent
}, {
  path: "tutor-details",
  component: TutorDetailsComponent
}, {
  path: "forum",
  component: ForumComponent
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
    AdminComponent,
    RateComponent,
    ResultsComponent,
    TutorDetailsComponent,
    ForumComponent,
    ForumSideNavComponent,
    ThreadComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
