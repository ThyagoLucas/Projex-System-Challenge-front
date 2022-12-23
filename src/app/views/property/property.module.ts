import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CreatePropertyComponent } from './create-property/create-property.component';
import { EditPropertyComponent } from './edit-property/edit-property.component';
import { PropertyComponent } from './property/property.component';
import { PropertyService } from './property.service';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';




@NgModule({
  declarations: [
     EditPropertyComponent,
     CreatePropertyComponent,
     PropertyComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
  providers:[
    PropertyService
  ]

})
export class PropertyModule { }
