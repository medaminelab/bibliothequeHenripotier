import { Component, OnInit } from '@angular/core';
import { Book } from '../../books/book.model';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  books: Book[];
  totalCartPrice: number;
  bestCommercialOffer: number;

  constructor(public cartService: CartService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetBooksFromCart();
  }

  deleteBookFromCart(book: Book): void {
    this.cartService.removeBookFromCart(book);
    this.resetBooksFromCart();
    this.toastr.success('le livre ' + book.title + ' a été supprimé du panier.', 'Supprimé du panier!');
  }

  private resetBooksFromCart() {
    this.books = this.cartService.getBooksInCart();
    this.totalCartPrice = this.cartService.getTotalPrice();
    this.cartService.getBestCommercialOffer().subscribe((recievedResponse) => {
      this.bestCommercialOffer = recievedResponse;
    });
  }

}
