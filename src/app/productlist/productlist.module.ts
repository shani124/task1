import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductlistRoutingModule } from './productlist-routing.module';

import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductlistComponent } from './productlist.component';
import { ProductstableComponent } from './productstable/productstable.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProductdetailComponent,
    ProductlistComponent,
    ProductstableComponent
  ],
  imports: [
    CommonModule,
    ProductlistRoutingModule,
    RouterModule
  ]
})
export class ProductlistModule { }
