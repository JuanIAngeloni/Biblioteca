import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpacityComponent } from './opacity.component';

describe('OpacityComponent', () => {
  let component: OpacityComponent;
  let fixture: ComponentFixture<OpacityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpacityComponent]
    });
    fixture = TestBed.createComponent(OpacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
