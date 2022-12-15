import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardsComponent } from './views/dashboards/dashboards.component';
import { EditMyDatasComponent } from './views/edit-my-datas/edit-my-datas.component';
import { HomeComponent } from './views/home/home.component';
import { PropertyComponent } from './views/property/property.component';

const routes: Routes = [{
  path:"",
  component: HomeComponent
},{
  path:"editar-imoveis",
  component: PropertyComponent
},{
  path:"dashboard",
  component: DashboardsComponent
},{
  path:"editar-dados",
  component: EditMyDatasComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
