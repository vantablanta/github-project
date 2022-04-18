import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './component/users/users.component';
import { LandingComponent } from './component/landing/landing.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'home', component: LandingComponent },
  {path: '', redirectTo:"home", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
