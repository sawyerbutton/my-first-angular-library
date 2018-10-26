import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleMyNgLibNewComponentComponent } from './example-my-ng-lib-new-component.component';

describe('ExampleMyNgLibNewComponentComponent', () => {
  let component: ExampleMyNgLibNewComponentComponent;
  let fixture: ComponentFixture<ExampleMyNgLibNewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleMyNgLibNewComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleMyNgLibNewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
