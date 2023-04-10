import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  singleproduct:any;
  productid:any;
  constructor(private route: ActivatedRoute,private _productapi:ProductService){
    
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

      this.productid = params.get('id');

      console.log(this.productid);

    });
    this._productapi.getproductbyid(this.productid).subscribe(res=>{
      this.singleproduct=res;
      console.log(this.singleproduct);
  })
  }


}
