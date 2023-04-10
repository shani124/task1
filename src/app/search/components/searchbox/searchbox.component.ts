import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {
  @Input() allproducts:any;
  @Output() searchedproducts=new EventEmitter<any>();
  inputtitle:any=' ';
 
  ngOnInit(): void {
    this.searchedproducts.emit(this.inputtitle);
  }


  setinput(event:any){
    console.log(this.allproducts)
    this.inputtitle=event.target.value;
  }
  setoutput(){
    this.searchedproducts.emit(this.inputtitle);
    console.log(this.inputtitle)
  }
}
