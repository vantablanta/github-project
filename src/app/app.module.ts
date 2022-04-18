import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './component/landing/landing.component';
import { NavComponent } from './component/nav/nav.component';
import { UsersComponent } from './component/users/users.component';
import { ReposComponent } from './component/repos/repos.component';
import { HideDirective } from './directive/hide.directive';
import { AboutComponent } from './component/about/about.component';
import { ProfileAgePipe } from './pipe/profile-age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavComponent,
    UsersComponent,
    ReposComponent,
    HideDirective,
    AboutComponent,
    ProfileAgePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
