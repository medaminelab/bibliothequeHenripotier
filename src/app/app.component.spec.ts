import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from './app-rooting.module';
import { FormsModule } from '@angular/forms';
import { CartPageComponent } from './features/cart/cart-page/cart-page.component';
import { BooksPageComponent } from './features/books/books-page/books-page.component';
import { BookCardComponent } from './features/books/book-card/book-card.component';
import { HeaderComponent } from './features/header/header.component';
import { CartService } from './features/cart/cart.service';
import { By } from '@angular/platform-browser';
describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule.withRoutes(routes), FormsModule],
      declarations: [HeaderComponent, BookCardComponent, BooksPageComponent, CartPageComponent, AppComponent],
    })
      .compileComponents();
  }));

  it('should integrate the header', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    let compiledHeader = fixture.debugElement.query(By.css('app-header'));
    expect(compiledHeader).toBeTruthy();
  }));

  it('should integrate the router-outlet whitch contains the pages ofthe application depends on the routting', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    let compiledRouterOutlet = fixture.debugElement.query(By.css('router-outlet'));
    expect(compiledRouterOutlet).toBeTruthy();
  }));

});
