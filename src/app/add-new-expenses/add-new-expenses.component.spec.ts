import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewExpensesComponent } from './add-new-expenses.component';

describe('AddNewExpensesComponent', () => {
  let component: AddNewExpensesComponent;
  let fixture: ComponentFixture<AddNewExpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewExpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
