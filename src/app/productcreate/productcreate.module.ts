import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductcreateRoutingModule } from './productcreate-routing.module';
import { CreateformComponent } from './createform/createform.component';
import { ProductcreateComponent } from './productcreate.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    CreateformComponent,
    ProductcreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductcreateRoutingModule
  ]
})
export class ProductcreateModule { }
