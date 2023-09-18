import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-carga-de-libros',
  templateUrl: './carga-de-libros.component.html',
  styleUrls: ['./carga-de-libros.component.css']
})
export class CargaDeLibrosComponent {
  
  constructor(private bookService: BookService) { }
  
  newBook: Book = {
    releaseYear: 0
  };

  enviarForm(form: NgForm) {

    if (form.valid) {
      console.log('Formulario válido. Datos enviados:', form.value)
      this.bookService.agregarLibro(form)
      this.bookService.listaDeLibros();

    } else {
      console.log('Formulario inválido. Por favor, complete todos los campos.');
    }
  }
} 