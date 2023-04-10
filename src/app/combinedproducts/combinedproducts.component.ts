import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ProductsarrayService } from '../services/productsarray.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-combinedproducts',
  templateUrl: './combinedproducts.component.html',
  styleUrls: ['./combinedproducts.component.css']
})
export class CombinedproductsComponent implements OnInit  {
  onSubmit(id:any) {
    let filtring=this.allproductsfiltered;
    filtring.products[id-1].title=this.titleinput;
    this.updatewithnewdata(filtring);


  }
  togglestatus?:boolean;
  titleinput?: string;
  data$:any;
  allproductsfiltered:any;
  allproducts:any;
  filtereditems: string[] = [];
  closeResult: string = '';
  
  

  constructor(private modalService: NgbModal,private _productapi:ProductService, public sharedarrayservice:ProductsarrayService){
  
  }

  ngOnInit(){

    
    this.data$=this.sharedarrayservice.initialize;
    this.allproductsfiltered=this.sharedarrayservice.initialize;
  console.log("dataof:"+this.data$.products);
 
   this._productapi.getproducts().subscribe(res=>{
        this.allproducts=res;
        console.log(res)
      //  this.sharedarrayservice.updateData(res);
    })
   
  
    
  
}

open(content:any) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}
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
  let filtring=this.data$;
  let result=filtring.products.filter((obj: { id: String; })=>{
    return obj.id!=id
  })
  let senddata=filtring;
  senddata.products=result;
  console.log("afterdelete"+senddata)
 this.updatewithnewdata(senddata);
}


settoggle(event: any,id:string){
  
  if(event.target.checked){
    console.log("Its on");
    const index = this.filtereditems.indexOf(id);
    this.filtereditems.splice(index, 1);
    console.log(this.filtereditems);

    let filtring=this.allproducts;
    let behaviourdata=this.allproductsfiltered;
    let result=filtring.products.find((p: { id: string; }) => p.id === id);
    console.log("one result "+result)
    behaviourdata.products.push(result);
   // let senddata=filtring;
   // senddata.products=result;
   // console.log("afterdelete"+senddata)
    this.updatewithnewdata(behaviourdata);

  }
  else{
    console.log("Its off");
    console.log(this.filtereditems);
    this.filtereditems.push(id);
    let filtring=this.allproductsfiltered;
    let result=filtring.products.filter((obj: { id: String; })=>{
    return obj.id!=id
  })

    let senddata=filtring;
    senddata.products=result;
    console.log("afterdelete"+senddata)
    this.updatewithnewdata(senddata);
  }
  
}

}
