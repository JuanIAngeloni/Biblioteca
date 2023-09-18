import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookImagenComponent } from './book-imagen.component';

describe('BookImagenComponent', () => {
  let component: BookImagenComponent;
  let fixture: ComponentFixture<BookImagenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookImagenComponent]
    });
    fixture = TestBed.createComponent(BookImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
