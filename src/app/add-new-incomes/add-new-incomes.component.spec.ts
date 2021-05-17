import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewIncomesComponent } from './add-new-incomes.component';

describe('AddNewIncomesComponent', () => {
  let component: AddNewIncomesComponent;
  let fixture: ComponentFixture<AddNewIncomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewIncomesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewIncomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
