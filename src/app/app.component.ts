import { Component, OnInit } from '@angular/core';
import { PrincipalComponent } from './principal/principal.component';
import { BookCardComponent } from './book-card/book-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Variable para controlar la visibilidad del componente de carga
  isHidden = false;

  ngOnInit(): void {
    // Mostrar el componente de carga
    this.isHidden = false;

    // Ocultar el componente de carga después de 3 segundos (3000 ms)
    setTimeout(() => {
      this.isHidden = true;
    }, 1000);
  }
}