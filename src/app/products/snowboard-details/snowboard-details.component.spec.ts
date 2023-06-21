import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowboardDetailsComponent } from './snowboard-details.component';

describe('SnowboardDetailsComponent', () => {
  let component: SnowboardDetailsComponent;
  let fixture: ComponentFixture<SnowboardDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SnowboardDetailsComponent]
    });
    fixture = TestBed.createComponent(SnowboardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
