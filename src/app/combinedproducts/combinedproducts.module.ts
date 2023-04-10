import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CombinedproductsRoutingModule } from './combinedproducts-routing.module';
import { CombinedproductsComponent } from './combinedproducts.component';
import { FilteredproductsComponent } from './components/filteredproducts/filteredproducts.component';


@NgModule({
  declarations: [
    CombinedproductsComponent,
    FilteredproductsComponent
  ],
  imports: [
    CommonModule,
    CombinedproductsRoutingModule,
    NgbModule,
    FormsModule
  ]
})
export class CombinedproductsModule { }
