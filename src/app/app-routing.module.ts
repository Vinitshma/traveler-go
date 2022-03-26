import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { DeleteComponent } from './bookings/delete/delete.component';
import { EditComponent } from './bookings/edit/edit.component';
import { ManageComponent } from './bookings/manage/manage.component';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { WishlistItemsComponent } from './component/wishlist-items/wishlist-items.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookcustomGuard } from './guards/bookcustom.guard';
import { BookheadGuard } from './guards/bookhead.guard';
import { UserWishGuard } from './guards/user-wish.guard';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';


const routes: Routes = [
  {path: '', redirectTo:'home',pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'login',component:LoginComponent},
  // canActivateChild
  {
    path: 'bookings',
    canActivate:[BookheadGuard],
    children:[{path:'bookings',component:BookingsComponent},
    {path:'bookings',
      canActivateChild:[BookcustomGuard],
      children:[
        {path: 'edit', component:EditComponent},
        {path: 'manage', component:ManageComponent},
        {path: 'delete', component:DeleteComponent},]}
  ]},
  
  {path: 'reports', component:ReportsComponent},
  {path: 'logout', component:LogoutComponent},
  // canActivate
  {
    path: 'wishlist', 
    component:WishlistItemsComponent,
    canActivate:[UserWishGuard]
  },

  { path: 'payment', loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule) },
  {path: 'signup', loadChildren:()=>import('./component/signup/signup.module').then(m=>m.SignupModule)},
  // must it be in last
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
