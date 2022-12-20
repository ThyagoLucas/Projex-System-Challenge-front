import { CreateAccountComponent } from './auth/create-account/create-account.component';
import { UnauthComponent } from './views/unauth/unauth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/shared/auth.guard';
import { DashboardsComponent } from './views/dashboards/dashboards.component';
import { EditMyDatasComponent } from './views/edit-my-datas/edit-my-datas.component';
import { HomeComponent } from './views/home/home.component';
import { PropertyComponent } from './views/property/property.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {path:'home', component: HomeComponent, canActivate:[AuthGuard]},
  {path:"editar-imoveis", component: PropertyComponent, canActivate:[AuthGuard]},
  {path:"dashboard", component: DashboardsComponent, canActivate:[AuthGuard]},
  {path:"editar-dados", component: EditMyDatasComponent, canActivate:[AuthGuard]}, 
  {path:'', component:UnauthComponent},
  {path:'login', component: LoginComponent},
  {path:'cadastro', component: CreateAccountComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
