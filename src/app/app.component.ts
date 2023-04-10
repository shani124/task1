import { Component,OnInit  } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from './DTO/product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'product-crud';
  allproducts:any;
  constructor(private _productapi:ProductService){
    
  }
  ngOnInit(){
    
  }
  
  /*oncreateproduct(){
    this._productapi.addproduct(this.productForm.value).subscribe(res => {
      console.log(res)
      })
  }*/
  ondeleteproduct(id:String){
    this._productapi.deleteproduct(id).subscribe(res=>{
      console.log(res)
    })
  }
 /* onupdateproduct(){
    this._productapi.updateproduct(this.postupdateid,this.productupdateForm.value).subscribe(res=>{
      console.log(res)
    })
  }*/
  

  
  
}

