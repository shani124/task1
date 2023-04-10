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
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';
import { NgxIndexedDBServiceService } from './services/ngx-indexed-dbservice.service';

const dbConfig:DBConfig = {
  name: 'myDb',
  version: 1,
  objectStoresMeta: [{
    store: 'products',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'title', keypath: 'title', options: { unique: false } },
      { name: 'description', keypath: 'description', options: { unique: false } },
      { name: 'price', keypath: 'price', options: { unique: false } },
      { name: 'discountPercentage', keypath: 'discountPercentage', options: { unique: false } },
      { name: 'rating', keypath: 'rating', options: { unique: false } },
      { name: 'stock', keypath: 'stock', options: { unique: false } },
      { name: 'brand', keypath: 'brand', options: { unique: false } },
      { name: 'category', keypath: 'category', options: { unique: false } },
      { name: 'thumbnail', keypath: 'thumbnail', options: { unique: false } },
      { name: 'images', keypath: 'images', options: { unique: false } },
    ]
  }]
};

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
    HtmlchallengeModule,
    NgxIndexedDBModule.forRoot(dbConfig),
  ],
  providers: [NgxIndexedDBServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
