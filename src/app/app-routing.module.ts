import { EditPropertyComponent } from './views/property/edit-property/edit-property.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateAccountComponent } from './auth/create-account/create-account.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/shared/auth.guard';
import { LoggedHomeComponent } from './components/template/logged-home/logged-home.component';
import { EditMyDatasComponent } from './views/edit-my-datas/edit-my-datas.component';
import { HomeComponent } from './views/home/home.component';
import { NotFoundPageComponent } from './views/not-found-page/not-found-page.component';
import { CreatePropertyComponent } from './views/property/create-property/create-property.component';
import { PropertyComponent } from './views/property/property/property.component';
import { UnauthComponent } from './views/unauth/unauth.component';

const routes: Routes = [
  {path:'', component:LoggedHomeComponent, children:[ 
    {path:'home',component: HomeComponent },
    {path:'imoveis', loadChildren:()=> import('./views/property/property-routing.module').then((m)=>m.PropertyRoutingModule)},
    {path:'editar-dados', component: EditMyDatasComponent}
    
    ], canActivate:[AuthGuard]},

  {path:'unauth', loadChildren:()=> import('./views/unauth/unauth-routing.module').then((m)=>m.UnauthRoutingModule)},
  {path:'login', loadChildren:()=> import('./auth/login/login-routing.module').then((m)=>m.LoginRoutingModule)},
  {path:'cadastro', loadChildren:()=> import('./auth/create-account/create-account-routing.module').then((m)=>m.CreateAccountRoutingModule)},
  {path:'**', component: NotFoundPageComponent},
  
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
