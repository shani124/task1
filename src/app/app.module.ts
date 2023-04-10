import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductcreateModule } from './productcreate/productcreate.module';
import { ProductlistModule } from './productlist/productlist.module';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductviewModule } from './productview/productview.module';
import { CombinedproductsModule } from './combinedproducts/combinedproducts.module';
import { ConstructorlearningModule } from './constructorlearning/constructorlearning.module';
import { SearchModule } from './search/search.module';
import { PipeModule } from './pipe/pipe.module';
import { ShortentextcustompipePipe } from './pipesutil/shortentextcustompipe.pipe';
import { HtmlpipePipe } from './pipesutil/htmlpipe/htmlpipe.pipe';
import { JqueryModule } from './jquery/jquery.module';
import { HtmlchallengeModule } from './htmlchallenge/htmlchallenge.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductcreateModule,
    ProductlistModule,
    ProductviewModule,
    HttpClientModule,
    NgbModule,
    CombinedproductsModule,
    ConstructorlearningModule,
    SearchModule,
    PipeModule,
    JqueryModule,
    HtmlchallengeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
