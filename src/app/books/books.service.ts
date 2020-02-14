import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../configs/AppConfig';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    const url = AppConfig.backendURL + '/books'
    return this.http.get<Book[]>(url);
  }

  freeSearch(pattern: string, books: Book[]): Book[] {
    let filteredBooks: Book[] = []
    for (let book of books) {
      if (book.isbn.toLowerCase().indexOf(pattern.toLowerCase()) !== -1
        || book.title.toLowerCase().indexOf(pattern.toLowerCase()) !== -1
        || this.isPriceEqualToPattern(pattern, book.price)
        || this.isSynopsysIncludePattern(pattern, book.synopsis)) {
        filteredBooks.push(book);
      }
    }
    return filteredBooks;
  }

  private isPriceEqualToPattern(pattern: string, price: number): boolean {
    let patternNumber = Number(pattern.replace(',', '.'));
    let isEqual = false;
    if (!Number.isNaN(patternNumber)) {
      isEqual = patternNumber === price;
    }
    return isEqual;
  }

  private isSynopsysIncludePattern(pattern: string, synopsis: string[]): boolean {
    let synopsysText = '';
    for (let synopsysParagraph of synopsis) {
      synopsysText += '  ' + synopsysParagraph;
    }
    return synopsysText.toLowerCase().indexOf(pattern.toLowerCase()) !== -1
  }

}
