import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootsDetailsComponent } from './boots-details.component';

describe('BootsDetailsComponent', () => {
  let component: BootsDetailsComponent;
  let fixture: ComponentFixture<BootsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BootsDetailsComponent]
    });
    fixture = TestBed.createComponent(BootsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
