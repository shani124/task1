import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConstructorlearningRoutingModule } from './constructorlearning-routing.module';
import { ConstructorlearningComponent } from './constructorlearning.component';
import { ChildcomponentComponent } from './components/childcomponent/childcomponent.component';


@NgModule({
  declarations: [
    ConstructorlearningComponent,
    ChildcomponentComponent
  ],
  imports: [
    CommonModule,
    ConstructorlearningRoutingModule
  ]
})
export class ConstructorlearningModule { }
