import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Pipe({
  name: 'htmlpipe'
})
export class HtmlpipePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(text: string, totaltags:number ): any {
    let returntext:string='';
    for(let i:number=0;i<text.length;i++){
      const color = '#' + Math.floor(Math.random() * 16777215).toString(16); // generate a random color
     // console.log(color)
      const safeStyle = this.sanitizer.bypassSecurityTrustStyle(`color:'+color+`);
      returntext+='<p style="color:'+color+'">'+text.charAt(i)+'</p>'
      console.log(returntext)
    }
    return returntext;
  }

}
