import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss']
})
export class BooksPageComponent implements OnInit {

  books: Book[];

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.booksService.getBooks().subscribe((data) => {
      this.books = data;
    });
  }

}
