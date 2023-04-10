import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductstableComponent } from './productstable/productstable.component';

const routes: Routes = [  
    {path:'product-details/:id',component:ProductdetailComponent},
    {path:"producttable",component:ProductstableComponent}
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductlistRoutingModule { }
