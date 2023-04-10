import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstructorlearningComponent } from './constructorlearning.component';

const routes: Routes = [
  {path:'',component:ConstructorlearningComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConstructorlearningRoutingModule { }
