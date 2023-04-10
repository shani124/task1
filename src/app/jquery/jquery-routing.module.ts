import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JqueryComponent } from './jquery.component';

const routes: Routes = [
  {path:'',component:JqueryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JqueryRoutingModule { }            
