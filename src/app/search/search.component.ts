import { Component, OnInit } from '@angular/core';
import { ProductsarrayService } from '../services/productsarray.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  allproducts:any;
  filteredproducts:any;
  searchtext:any=' ';

  constructor(private sharedservice:ProductsarrayService){

  }

  ngOnInit(): void {
    this.allproducts=this.sharedservice.initialize.products;
    this.filteredproducts=this.sharedservice.initialize.products;
    this.childtoparent(' ');
   // console.log(this.allproducts);
  } 
  childtoparent(newItem: any) {
    if(newItem==' '){
    }else{
    this.searchtext=newItem;
    this.filteredproducts=this.allproducts;
    this.filteredproducts=this.filteredproducts.filter((obj:any) => {
      return obj.title.includes(newItem);
    })
    console.log("pusheddata:"+this.searchtext)}
  }

}
