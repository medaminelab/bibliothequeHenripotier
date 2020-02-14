import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-rooting.module';
import { HttpClientModule } from '@angular/common/http';
import { BooksPageComponent } from './books/books-page/books-page.component';
import { BookCardComponent } from './books/book-card/book-card.component';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import localeFr from '@angular/common/locales/fr';
import { HeaderComponent } from './header/header.component';
registerLocaleData(localeFr);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksPageComponent,
    BookCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
