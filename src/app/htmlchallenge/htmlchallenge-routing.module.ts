import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmlchallengeComponent } from './htmlchallenge.component';

const routes: Routes = [
  {path:'',component:HtmlchallengeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HtmlchallengeRoutingModule { }
