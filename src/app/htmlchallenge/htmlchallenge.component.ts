import { Component } from '@angular/core';

@Component({
  selector: 'app-htmlchallenge',
  templateUrl: './htmlchallenge.component.html',
  styleUrls: ['./htmlchallenge.component.css']
})
export class HtmlchallengeComponent {
    divstat:boolean=true;
    numberslist:any=[1,2,3,4,5,6,7,8]

    onclickchange(){
      if(this.divstat){
        this.divstat=false;
      }else{
        this.divstat=true;
      }
    }
}
