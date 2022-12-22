import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Interceptor } from './auth/account.interceptor.module';
import { CreateAccountComponent } from './auth/create-account/create-account.component';
import { LoginComponent } from './auth/login/login.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';
import { LoggedHomeComponent } from './components/template/logged-home/logged-home.component';
import { NavComponent } from './components/template/nav/nav.component';
import { DashboardsComponent } from './views/dashboards/dashboards.component';
import { EditMyDatasComponent } from './views/edit-my-datas/edit-my-datas.component';
import { HomeComponent } from './views/home/home.component';
import { NotFoundPageComponent } from './views/not-found-page/not-found-page.component';
import { CreatePropertyComponent } from './views/property/create-property/create-property.component';
import { EditPropertyComponent } from './views/property/edit-property/edit-property.component';
import { HomePropertyComponent } from './views/property/home-property/home-property.component';
import { UnauthComponent } from './views/unauth/unauth.component';


//material forms

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
    CreateAccountComponent,
    UnauthComponent,
    CreateAccountComponent,
    LoginComponent,
    NotFoundPageComponent,
    CreatePropertyComponent,
    EditPropertyComponent,
    HomePropertyComponent,
    LoggedHomeComponent
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
    Interceptor,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
 
    
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
