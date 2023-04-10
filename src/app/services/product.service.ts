import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../DTO/product';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http:HttpClient) { }
  getproducts(){
    return this._http.get('https://dummyjson.com/products');
  }
  addproduct(data:string): Observable<any> {
    return this._http.post<any>('https://dummyjson.com/products/add',data);
  }
  deleteproduct(id:String){
    return this._http.delete("https://dummyjson.com/products/"+id);
  }
  updateproduct(id:String,product:Product):Observable<any>{
    return this._http.put("https://dummyjson.com/products/"+id,product);
  }
  getproductbyid(id:String):Observable<any>{
    return this._http.get("https://dummyjson.com/products/"+id);
  }
}
