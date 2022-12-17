import { Interceptor } from './auth/account.interceptor.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { EditMyDatasComponent } from './views/edit-my-datas/edit-my-datas.component';
import { DashboardsComponent } from './views/dashboards/dashboards.component';
import { LoginComponent } from './views/login/login.component';
import { CreateAccountComponent } from './auth/create-account/create-account.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    EditMyDatasComponent,
    DashboardsComponent,
    LoginComponent,
    CreateAccountComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
    Interceptor
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
