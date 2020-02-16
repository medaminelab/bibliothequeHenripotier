/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeaderComponent } from './header.component';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from '../cart/cart.service';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../../app-rooting.module';
import { BookCardComponent } from '../books/book-card/book-card.component';
import { BooksPageComponent } from '../books/books-page/books-page.component';
import { CartPageComponent } from '../cart/cart-page/cart-page.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule.withRoutes(routes), FormsModule],
      declarations: [HeaderComponent, BookCardComponent, BooksPageComponent, CartPageComponent],
      providers: [CartService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call the navigate method of the router with the booksPage Route as parameter after the click on the "biblithèque de Henri Potier"',
    inject([Router], (router: Router) => {
      // Spy on the method navigate of the router service
      const navigateSpy = spyOn(router, 'navigate');

      // Simuler leclick sur "Bibliothèque de Henri Potier"
      const compiledTitleButton = fixture.debugElement.query(By.css('#title-button'));
      compiledTitleButton.nativeElement.dispatchEvent(new Event('click'));

      // Vérifier la navigation
      expect(navigateSpy).toHaveBeenCalledWith(['/livres']);
    }));

  it('should call the navigate method of the router with the CartPage Route as parameter after the click on the cart button',
    inject([Router], (router: Router) => {
      // Spy on the method navigate of the router service
      const navigateSpy = spyOn(router, 'navigate');

      // Simuler leclick sur le bouton du panier
      const compiledCartButton = fixture.debugElement.query(By.css('#cart-button'));
      compiledCartButton.nativeElement.dispatchEvent(new Event('click'));

      // Vérifier la navigation
      expect(navigateSpy).toHaveBeenCalledWith(['/panier']);
    }));

});
