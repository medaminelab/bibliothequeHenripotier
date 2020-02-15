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
  filteredBooks: Book[];
  patternSearch: string;

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.booksService.getBooks().subscribe((data) => {
      this.books = data;
      this.filteredBooks = this.books;
    });
  }

  filterBooks(): void {
    console.log(this.patternSearch);
    this.filteredBooks = this.patternSearch && this.patternSearch !== '' ?
      this.booksService.freeSearch(this.patternSearch, this.books) : this.filteredBooks = this.books;
  }

}
