import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleMyNgLibComponent } from './example-my-ng-lib.component';

describe('ExampleMyNgLibComponent', () => {
  let component: ExampleMyNgLibComponent;
  let fixture: ComponentFixture<ExampleMyNgLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleMyNgLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleMyNgLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
