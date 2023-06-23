import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingsDetailsComponent } from './bindings-details.component';

describe('BindingsDetailsComponent', () => {
  let component: BindingsDetailsComponent;
  let fixture: ComponentFixture<BindingsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BindingsDetailsComponent]
    });
    fixture = TestBed.createComponent(BindingsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
