import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routesNames } from '../../configs/RoutesConfig';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public cartService: CartService, private router: Router) { }

  ngOnInit() {
  }

  redirectToPage(route: string) {
    let routeUrl: string = '/' + routesNames[route];
    this.router.navigate([routeUrl]);
  }

  displayNotifications(): boolean {
    return this.cartService.books.length !== 0;
  }

}
