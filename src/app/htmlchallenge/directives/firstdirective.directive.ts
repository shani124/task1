import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFirstdirective]'
})
export class FirstdirectiveDirective {

  
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackgroundColor('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor('red');
  }

  private changeBackgroundColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
