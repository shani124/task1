import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-constructorlearning',
  templateUrl: './constructorlearning.component.html',
  styleUrls: ['./constructorlearning.component.css']
})
export class ConstructorlearningComponent {
  @Input() title?: string; // title property can be passed in from parent component
  protected parentProperty: string = 'parent property';

  public parentMethod(): void {
    console.log('Parent method called');
  }

}
