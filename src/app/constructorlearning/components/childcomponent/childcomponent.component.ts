import { Component } from '@angular/core';
import { ConstructorlearningComponent } from '../../constructorlearning.component';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent extends ConstructorlearningComponent {
  public childProperty: string = 'child property';
  private childTitle: string = 'Child Component';

  constructor() {
    super(); // calling the constructor of ParentComponent
    console.log(super.parentProperty); // accessing parent property using super keyword
    super.parentMethod(); // calling parent method using super keyword
  }

  public childMethod(): void {
    console.log('Child method called');
  }
}
