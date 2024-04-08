import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignoreDegliAnelliComponent } from './signore-degli-anelli.component';

describe('SignoreDegliAnelliComponent', () => {
  let component: SignoreDegliAnelliComponent;
  let fixture: ComponentFixture<SignoreDegliAnelliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignoreDegliAnelliComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignoreDegliAnelliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
