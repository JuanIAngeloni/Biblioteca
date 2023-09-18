import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaDeLibrosComponent } from './carga-de-libros.component';

describe('CargaDeLibrosComponent', () => {
  let component: CargaDeLibrosComponent;
  let fixture: ComponentFixture<CargaDeLibrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CargaDeLibrosComponent]
    });
    fixture = TestBed.createComponent(CargaDeLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
