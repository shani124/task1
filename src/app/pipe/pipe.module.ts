import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeRoutingModule } from './pipe-routing.module';
import { PipeComponent } from './pipe.component';
import { ShortentextcustompipePipe } from '../pipesutil/shortentextcustompipe.pipe';
import { HtmlpipePipe } from '../pipesutil/htmlpipe/htmlpipe.pipe';


@NgModule({
  declarations: [
    PipeComponent,
    ShortentextcustompipePipe,
    HtmlpipePipe
  ],
  imports: [
    CommonModule,
    PipeRoutingModule
  ]
})
export class PipeModule { }
