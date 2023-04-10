import { Component, OnInit } from '@angular/core';
import {Product} from 'src/app/DTO/product'
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-createform',
  templateUrl: './createform.component.html',
  styleUrls: ['./createform.component.css']
})
export class CreateformComponent{
   brand: string="";
  category: string="";
  title: string="";
  price: string="";

  constructor(private _productapi:ProductService){
    
  }

 


  onSubmit() {
    console.log('Form submitted!');    
    this.oncreateproduct();
  }
  oncreateproduct(){
    const data= {"brand":this.brand,"category":this.category,"title":this.title,"price":this.price};
    this._productapi.addproduct(JSON.stringify(data)).subscribe(res => {
      console.log(res)
      })
  }
}
