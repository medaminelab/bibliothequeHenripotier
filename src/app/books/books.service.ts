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

}
