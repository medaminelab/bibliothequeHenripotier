import { Injectable } from '@angular/core';
import { Book } from '../books/book.model';
import { AppConfig } from '../../configs/AppConfig';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CommercialOffer } from './commercial-offer.model';
import { CommercialOfferEnum } from './commercial-offer.enum';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  books: Book[] = [];

  constructor(private http: HttpClient) { }

  getBooksInCart(): Book[] {
    return this.books;
  }

  addBookToCart(book: Book): void {
    this.books.push(book);
  }

  removeBookFromCart(book: Book): void {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].isbn === book.isbn) {
        this.books.splice(i, 1);
      }
    }
  }

  getTotalPrice(): number {
    let totalPrice = 0;
    for (let book of this.books) {
      totalPrice += book.price;
    }
    return totalPrice
  }

  getBestCommercialOffer(): Observable<number> {
    //calculer le prix totale du panier
    let totalPrice = this.getTotalPrice();

    //appeler le service du backend pour réccupérer les offres commerciales disponibles
    return this.http.get<{ offers: CommercialOffer[] }>(this.getCommercialOffersUrl()).pipe(
      map(recievedRespone => {
        let commercialOffersPrices: number[] = [];

        for (let offer of recievedRespone.offers) {
          let reduction: number;

          //calculer la reduction selon le type de l'offre
          if (offer.type === CommercialOfferEnum.PERCENTAGE) {
            reduction = totalPrice * offer.value * 0.01;
          } else if (offer.type === CommercialOfferEnum.MINUS) {
            reduction = offer.value;
          } if (offer.type === CommercialOfferEnum.SLICE) {
            reduction = offer.value * Math.floor(totalPrice / offer.sliceValue);
          }

          commercialOffersPrices.push(totalPrice - reduction);
        }
        console.log(commercialOffersPrices);
        // retourner l'offre commerciale la plus optimale du panier
        return Math.min(...commercialOffersPrices);
      })
    )
  }

  private getCommercialOffersUrl(): string {
    let url = AppConfig.backendURL + '/books/'
    for (let book of this.books) {
      url += book.isbn + ',';
    }
    url = url.replace(/.$/, '/')
    url += 'commercialOffers';
    return url;
  }

}
