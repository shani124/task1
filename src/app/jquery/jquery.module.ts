import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JqueryRoutingModule } from './jquery-routing.module';
import { JqueryComponent } from './jquery.component';


@NgModule({
  declarations: [
    JqueryComponent
  ],
  imports: [
    CommonModule,
    JqueryRoutingModule
  ]
})
export class JqueryModule { }
