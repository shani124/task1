import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailComponent } from './productlist/productdetail/productdetail.component';
import { CreateformComponent } from './productcreate/createform/createform.component';
import { ProductcreateComponent } from './productcreate/productcreate.component';
import { HomeComponent } from './components/home/home.component';
import { ProductstableComponent } from './productlist/productstable/productstable.component';
import { ProductviewComponent } from './productview/productview.component';
import { ProductlayoutComponent } from './productview/components/productlayout/productlayout.component';
import { CombinedproductsComponent } from './combinedproducts/combinedproducts.component';

const routes: Routes = [
  {path:"",redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:"productlist",loadChildren:() => import('../app/productlist/productlist.module').then(m=> m.ProductlistModule)
   },
   {path:"productcreate",loadChildren:()=>import('../app/productcreate/productcreate.module').then(m=>m.ProductcreateModule) 
  },
  {path:"productview",loadChildren:()=>import('../app/productview/productview.module').then(m=>m.ProductviewModule)
    },
  {path:"productcombined",loadChildren:()=>import('../app/combinedproducts/combinedproducts.module').then(m=>m.CombinedproductsModule)},
  {path:"constructor",loadChildren:()=>import('../app/constructorlearning/constructorlearning.module').then(m=>m.ConstructorlearningModule)},
  {path:"search",loadChildren:()=>import('../app/search/search.module').then(m=>m.SearchModule)},
  {path:"pipe",loadChildren:()=>import('../app/pipe/pipe.module').then(m=>m.PipeModule)},
  {path:"jquery",loadChildren:()=>import('../app/jquery/jquery.module').then(m=>m.JqueryModule)},
  {path:"htmlchallenge",loadChildren:()=>import('../app/htmlchallenge/htmlchallenge.module').then(m=>m.HtmlchallengeModule)}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
