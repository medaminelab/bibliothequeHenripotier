import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book.model';
import { CartService } from '../../cart/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  @Input() book: Book;

  constructor(private cartService: CartService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  addBookToCart(): void {
    this.cartService.addBookToCart(this.book)
    this.toastr.success('le livre ' + this.book.title + ' a été ajouté au panier.', 'Ajouté au panier!');
  }

}
