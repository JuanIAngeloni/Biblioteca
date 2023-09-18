import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-imagen',
  templateUrl: './book-imagen.component.html',
  styleUrls: ['./book-imagen.component.css']
})
export class BookImagenComponent{
  @Input() book?:Book ;

  // book: Book = {
  //   imagePath: './assets/images/MiplantenaranjaPortada.jpg',
  //   releaseYear:333
  // }; 
  // ngOnInit(): void {
  //   this.book.imagePath 
  // }

}


