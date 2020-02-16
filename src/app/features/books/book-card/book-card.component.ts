import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book.model';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  @Input() book: Book;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addBookToCart(): void {
    this.cartService.addBookToCart(this.book);
  }

}
