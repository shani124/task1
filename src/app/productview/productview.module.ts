import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductlayoutComponent } from './components/productlayout/productlayout.component';
import { ProductviewComponent } from './productview.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductlayoutComponent,
    ProductviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ProductviewModule { }
