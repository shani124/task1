import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { ProductsarrayService } from 'src/app/services/productsarray.service';

@Component({
  selector: 'app-productlayout',
  templateUrl: './productlayout.component.html',
  styleUrls: ['./productlayout.component.css']
})
export class ProductlayoutComponent implements OnInit {
 
  gridview:boolean=true;
  data$: any;
  constructor(public sharedservice:ProductsarrayService,private productservice:ProductService){}
  ngOnInit(): void {
    this.sharedservice.data$.subscribe((data)=>{
      this.data$=data;
    });
    
  }

}
