import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructorlearningComponent } from './constructorlearning.component';

describe('ConstructorlearningComponent', () => {
  let component: ConstructorlearningComponent;
  let fixture: ComponentFixture<ConstructorlearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructorlearningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstructorlearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
