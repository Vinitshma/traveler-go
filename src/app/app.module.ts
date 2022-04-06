import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { BookingsComponent } from './bookings/bookings.component';
import { ReportsComponent } from './reports/reports.component';
import { LogoutComponent } from './component/logout/logout.component';
import { HttpClientModule } from '@angular/common/http';


// angular material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
// prime
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { InputTextareaModule } from "primeng/inputtextarea";
import { WishlistItemsComponent } from './component/wishlist-items/wishlist-items.component';
import { EditComponent } from './bookings/edit/edit.component';
import { ManageComponent } from './bookings/manage/manage.component';
import { DeleteComponent } from './bookings/delete/delete.component';
import {BreadcrumbModule} from 'primeng/breadcrumb';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SidenavComponent,
    DashboardComponent,
    LoginComponent,
    PageNotFoundComponent,
    BookingsComponent,
    ReportsComponent,
    LogoutComponent,
    WishlistItemsComponent,
    EditComponent,
    ManageComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    InputTextModule,
    MatFormFieldModule,
    ButtonModule,
    MatInputModule,
    InputTextareaModule,
    MatCheckboxModule,
    FormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    BreadcrumbModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
