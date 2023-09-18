import { Injectable } from '@angular/core';
import { Book } from './book';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  newBook: Book = {releaseYear: 0};
  agregarLibro(form: NgForm) {
    this.newBook=form.value;
    const año:any=this.newBook.releaseYear;
    console.log(typeof{año})

    this.books.push(this.newBook)
  }
  listaDeLibros() {

    return this.books;
  }




  book1: Book = {
    name: 'Mi planta de naranja lima',
    description: 'Cuenta la vida de un niño de 5 años llamado Zezé, él es un niño muy travieso e independiente que vive en una familia muy numerosa y pobre, debido a que su padre no tiene trabajo. Por este motivo se mudan; cerca de la nueva vivienda encuentra en una canaleta una planta de naranja lima.',
    author: 'Jose Mauro de Vasconcelos',
    category: 'Novela - Drama',
    releaseYear: 1968,
    imagePath: './assets/images/MiplantenaranjaPortada.jpg'
  };
  book2: Book = {
    name: 'Cien años de soledad',
    description: 'La novela narra la historia de la familia Buendía en el pueblo ficticio de Macondo a lo largo de siete generaciones. A través de elementos mágicos y realistas, Gabriel García Márquez explora temas como el amor, la soledad y la decadencia.',
    author: 'Gabriel García Márquez',
    category: 'Novela - Realismo mágico',
    releaseYear: 1967,
    imagePath: './assets/images/cien_anos_soledad.jpg'
  };
  book3: Book = {
    name: '1984',
    description: 'Esta distopía describe un mundo totalitario donde el gobierno controla cada aspecto de la vida de las personas. La historia sigue a Winston Smith mientras lucha contra el régimen opresivo y busca la verdad.',
    author: 'George Orwell',
    category: 'Ciencia ficción - Distopía',
    releaseYear: 1949,
    imagePath: './assets/images/portada_1984.jpg'
  };
  book4: Book = {
    name: 'El señor de los anillos: La comunidad del anillo',
    description: 'La primera entrega de la trilogía épica de J.R.R. Tolkien sigue a Frodo Bolsón y un grupo de compañeros en su búsqueda para destruir el Anillo Único y derrotar al Señor Oscuro Sauron.',
    author: 'J.R.R. Tolkien',
    category: 'Fantasía épica',
    releaseYear: 1954,
    imagePath: './assets/images/Señor anillo.jpg'
  };
  book5: Book = {
    name: 'Matar un ruiseñor',
    description: 'La novela explora temas de racismo y justicia a través de la historia de Scout Finch y su padre, el abogado Atticus Finch, mientras defienden a un hombre negro acusado injustamente de violación en el sur de Estados Unidos durante la década de 1930.',
    author: 'Harper Lee',
    category: 'Novela - Drama social',
    releaseYear: 1960,
    imagePath: './assets/images/kill_a_MockingBird.jpg'
  };
  book6: Book = {
    name: 'Harry Potter y la piedra filosofal',
    description: 'La historia sigue a un joven mago llamado Harry Potter mientras descubre su verdadera identidad y asiste a la escuela de magia de Hogwarts. En su primer año, se enfrenta a desafíos y misterios relacionados con la piedra filosofal.',
    author: 'J.K. Rowling',
    category: 'Fantasía',
    releaseYear: 1997,
    imagePath: './assets/images/Harry potter y la piedra filosa.jpg'
  };

  book7: Book = {
    name: 'Crónica de una muerte anunciada',
    description: 'La novela narra la historia de un asesinato en una pequeña ciudad caribeña y cómo toda la comunidad sabe que ocurrirá, pero nadie puede evitarlo. Gabriel García Márquez explora la fatalidad y el honor en esta obra.',
    author: 'Gabriel García Márquez',
    category: 'Novela - Realismo mágico',
    releaseYear: 1981,
    imagePath: './assets/images/cronicademuerteanunciada.jpg'
  };
  book8: Book = {
    name: 'Los juegos del hambre',
    description: 'En un futuro distópico, Katniss Everdeen se ofrece como voluntaria para participar en los Juegos del Hambre, un evento mortal donde jóvenes compiten por sobrevivir. La novela aborda temas de supervivencia y resistencia.',
    author: 'Suzanne Collins',
    category: 'Ciencia ficción - Distopía',
    releaseYear: 2008,
    imagePath: './assets/images/los juegos del hambre.jpg'
  };
  book9: Book = {
    name: 'Moby-Dick',
    description: 'La historia sigue al capitán Ahab en su obsesiva búsqueda de venganza contra la ballena blanca, Moby-Dick. La novela de Herman Melville es una épica marítima que explora temas de obsesión y destino.',
    author: 'Herman Melville',
    category: 'Novela - Aventuras',
    releaseYear: 1851,
    imagePath: './assets/images/moby dick.jpg'
  };
  book10: Book = {
    name: 'Orgullo y prejuicio',
    description: 'La novela de Jane Austen se centra en la vida de Elizabeth Bennet y su familia en la Inglaterra del siglo XIX. Explora temas de amor, clase social y prejuicio a través de las relaciones de los personajes.',
    author: 'Jane Austen',
    category: 'Novela - Romance',
    releaseYear: 1813,
    imagePath: './assets/images/orgullo y prejuicio.jpg'
  };
  book11: Book = {
    name: 'El Gran Gatsby',
    description: 'La novela sigue la vida del misterioso Jay Gatsby a través de los ojos de Nick Carraway. Se desarrolla en la década de 1920 en Long Island y explora temas de riqueza, amor y decadencia en la sociedad estadounidense de la época.',
    author: 'F. Scott Fitzgerald',
    category: 'Novela - Drama',
    releaseYear: 1925,
    imagePath: './assets/images/The great gatsby.jpg'
  };

  books: Book[] = [
    this.book1, this.book2, this.book3, this.book4, this.book5,
    this.book6, this.book7, this.book8, this.book9, this.book10, this.book11]

  constructor() { }
}
