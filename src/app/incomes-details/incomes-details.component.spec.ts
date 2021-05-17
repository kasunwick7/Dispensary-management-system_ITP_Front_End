import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomesDetailsComponent } from './incomes-details.component';

describe('IncomesDetailsComponent', () => {
  let component: IncomesDetailsComponent;
  let fixture: ComponentFixture<IncomesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
