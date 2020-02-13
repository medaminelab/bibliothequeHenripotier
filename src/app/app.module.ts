import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-rooting.module';
import { HttpClientModule } from '@angular/common/http';
import { BooksPageComponent } from './books/books-page/books-page.component';
import { BookCardComponent } from './books/book-card/book-card.component';
import { FlexLayoutModule } from '@angular/flex-layout'; 

@NgModule({
  declarations: [
    AppComponent,
    BooksPageComponent,
    BookCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
