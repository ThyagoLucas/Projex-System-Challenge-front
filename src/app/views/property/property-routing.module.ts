import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreatePropertyComponent } from './create-property/create-property.component';
import { PropertyComponent } from './property/property.component';



const routes: Routes = [
    {path:'', component:PropertyComponent},
    {path:'adicionar', component:CreatePropertyComponent}

]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class PropertyRoutingModule { }