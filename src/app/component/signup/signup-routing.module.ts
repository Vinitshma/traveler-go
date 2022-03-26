import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {path:'', component:UserDetailsComponent},
  {path:'accountDetails', component:AccountDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
