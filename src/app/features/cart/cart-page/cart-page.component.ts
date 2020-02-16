import { Component, OnInit } from '@angular/core';
import { Book } from '../../books/book.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  books: Book[];
  totalCartPrice: number;
  bestCommercialOffer: number;

  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.resetBooksFromCart();
  }

  deleteBookFromCart(book: Book): void {
    this.cartService.removeBookFromCart(book);
    this.resetBooksFromCart();
  }

  private resetBooksFromCart() {
    this.books = this.cartService.getBooksInCart();
    this.totalCartPrice = this.cartService.getTotalPrice();
    this.cartService.getBestCommercialOffer().subscribe((recievedResponse) => {
      this.bestCommercialOffer = recievedResponse;
    });
  }

}
