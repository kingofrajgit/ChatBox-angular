import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';

const routes: Routes = [
  {
    path:"footers",
    component:FooterComponent
  },
  {
    path:"component",
    component:NavbarComponent},
  {
    path: "home",
    component:HomeComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:'',redirectTo:"home",pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
