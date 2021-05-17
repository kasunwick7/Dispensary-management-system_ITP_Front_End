import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugIssueComponent } from './drug-issue.component';

describe('DrugIssueComponent', () => {
  let component: DrugIssueComponent;
  let fixture: ComponentFixture<DrugIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
