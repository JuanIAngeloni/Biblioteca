import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../book';
import { CommonModule, NgFor } from '@angular/common';
import { BookService } from '../book.service';


@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  ngOnInit():void{
    this.bookService.listaDeLibros();
  }
  constructor(private bookService: BookService) { }

  tituloValueDesigned: any= "Listado de libros" ;

    books:Book[]=this.bookService.listaDeLibros();
  añoLibro:number = 0;
  yearPlus(releaseYear: number, index: number): number {
    
    this.books[index].releaseYear = releaseYear+1 ;
    console.log(this.books[index].releaseYear)
    return  this.books[index].releaseYear
    // return this.book.releaseYear;
  }

  rangeValue: number = 0.99;

  isHidden: boolean = false;

  cbxHidden(event: any, index: number): void {
    if (event.target.checked == true)
      this.books[index].hiddenOrVisible = true
    else {
      this.books[index].hiddenOrVisible = false
    }

  }






}