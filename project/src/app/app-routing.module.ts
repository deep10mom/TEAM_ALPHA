import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeadlinesComponent } from './deadlines/deadlines.component';
import {NavigationComponent } from './navigation/navigation.component';
import { LoginComponent} from './login/login.component';
import { HomepageComponent} from './homepage/homepage.component';
import {FooterComponent} from './footer/footer.component';
 
const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:"deadlines",component:DeadlinesComponent},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomepageComponent},
  {path:"**",component:NavigationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
