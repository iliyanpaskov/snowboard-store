import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowboardsComponent } from './snowboards.component';

describe('SnowboardsComponent', () => {
  let component: SnowboardsComponent;
  let fixture: ComponentFixture<SnowboardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SnowboardsComponent]
    });
    fixture = TestBed.createComponent(SnowboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
