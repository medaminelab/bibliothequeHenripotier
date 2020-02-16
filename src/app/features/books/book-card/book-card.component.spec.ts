/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BookCardComponent } from './book-card.component';
import { CartService } from '../../cart/cart.service';
import { HttpClientModule } from '@angular/common/http';

describe('BookCardComponent', () => {
  let component: BookCardComponent;
  let fixture: ComponentFixture<BookCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [BookCardComponent],
      providers: [CartService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call the addBookToCart method of the cartService on the button click', inject([CartService],
    (cartService: CartService) => {

      // Spy on the addBookToCart method of cartService with the book in the cardComponent
      const cartsServiceSpy = spyOn(cartService, 'addBookToCart').withArgs(component.book).and.callThrough();

      // Simuler le click du bouton ajouter au panier
      const compiledButton = fixture.debugElement.nativeElement.querySelector('button');
      compiledButton.dispatchEvent(new Event('click'));

      // Vérifier si la métode addBookToCart fu cartService avec le bon paramètre
      expect(cartsServiceSpy).toHaveBeenCalled();

    }));
});
