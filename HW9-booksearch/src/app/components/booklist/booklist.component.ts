import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Subscription } from 'rxjs';
import { ExpectBook } from '../../services/interfaces/book.interface';

@Component({
  selector: 'app-booklist',
  standalone: false,

  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.scss',
})
export class BooklistComponent implements OnInit, OnDestroy {
  booksup = new Subscription();
  books: ExpectBook[] = [];
  wishList: ExpectBook[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.booksup = this.bookService.bookSubject$.subscribe(
      (val: ExpectBook[]) => {
        console.log('booklist: ', val);
        this.books = val;
      }
    );
  }
  ngOnDestroy(): void {
    this.booksup.unsubscribe();
  }

  addToWishList(book: ExpectBook) {
    this.bookService.addToWishList(book);
  }

  isInWishList(book: ExpectBook): boolean {
    return this.wishList.some((b) => b.bookName === book.bookName);
  }

}
