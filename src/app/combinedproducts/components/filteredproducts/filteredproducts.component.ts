import { Component, OnInit } from '@angular/core';
import { ProductsarrayService } from 'src/app/services/productsarray.service';

@Component({
  selector: 'app-filteredproducts',
  templateUrl: './filteredproducts.component.html',
  styleUrls: ['./filteredproducts.component.css']
})
export class FilteredproductsComponent implements OnInit  {
  data$:any;
  
  constructor( public sharedarrayservice:ProductsarrayService){
  
  }

  ngOnInit(){

    
    this.sharedarrayservice.data$.subscribe(data=>{
      this.data$=data;
      this.data$.products.sort((a:any, b:any) => a.id - b.id);
    });
  
    console.log("dataof:"+this.data$.products);
 
/*   this._productapi.getproducts().subscribe(res=>{
        this.allproducts=res;
        this.updateData();
        console.log("Checking the type "+this.allproducts);
      //  this.sharedarrayservice.updateData(res);
    })*/
   
  
    
  
}

}
