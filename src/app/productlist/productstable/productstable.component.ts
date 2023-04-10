import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductsarrayService } from 'src/app/services/productsarray.service';



@Component({
  selector: 'app-productstable',
  templateUrl: './productstable.component.html',
  styleUrls: ['./productstable.component.css']
})
export class ProductstableComponent implements OnInit {
  data$:any;
  
  constructor(private _productapi:ProductService, public sharedarrayservice:ProductsarrayService){
  
  }
  ngOnInit(){

    
      this.data$=this.sharedarrayservice.initialize;
    
    console.log("dataof:"+this.data$.products);
   
  /*   this._productapi.getproducts().subscribe(res=>{
          this.allproducts=res;
          this.updateData();
          console.log("Checking the type "+this.allproducts);
        //  this.sharedarrayservice.updateData(res);
      })*/
     
    
      
    
  }
  
  /*oncreateproduct(){
    this._productapi.addproduct(this.productForm.value).subscribe(res => {
      console.log(res)
      })
  }*/
  updateData() {
    this.sharedarrayservice.updateData(this.data$);
  }
  updatewithnewdata(data:any){
    this.sharedarrayservice.updateData(data);
  }
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
  //////working on offfline crud with array

  ondeleteprod(id:String){
    let result=this.data$.products.filter((obj: { id: String; })=>{
      return obj.id!=id
    })
    let senddata=this.data$;
    senddata.products=result;
    console.log("afterdelete"+senddata)
   this.updatewithnewdata(senddata);
  }

  
}
