import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlchallengeComponent } from './htmlchallenge.component';

describe('HtmlchallengeComponent', () => {
  let component: HtmlchallengeComponent;
  let fixture: ComponentFixture<HtmlchallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlchallengeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlchallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
