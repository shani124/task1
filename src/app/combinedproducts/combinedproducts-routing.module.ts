import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombinedproductsComponent } from './combinedproducts.component';

const routes: Routes = [
  {path:'',component:CombinedproductsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CombinedproductsRoutingModule { }
