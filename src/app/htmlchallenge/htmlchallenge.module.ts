import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HtmlchallengeRoutingModule } from './htmlchallenge-routing.module';
import { HtmlchallengeComponent } from './htmlchallenge.component';
import { FirstdirectiveDirective } from './directives/firstdirective.directive';
import { ChildComponent } from './childcomponent/child/child.component';


@NgModule({
  declarations: [
    HtmlchallengeComponent,
    FirstdirectiveDirective,
    ChildComponent
  ],
  imports: [
    CommonModule,
    HtmlchallengeRoutingModule
  ]
})
export class HtmlchallengeModule { }
