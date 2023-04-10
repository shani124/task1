import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateformComponent } from './createform/createform.component';

  
const routes: Routes = [
  {path:"create",component:CreateformComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductcreateRoutingModule { }
