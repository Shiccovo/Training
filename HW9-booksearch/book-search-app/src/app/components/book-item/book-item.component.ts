import { Component, Input } from '@angular/core';
import { ExpectBook } from '../../interfaces/book.interface';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent {
  @Input() book!: ExpectBook;

  constructor(private bookService: BookService) {}

  addToWishList() {
    this.bookService.addToWishList(this.book);
  }
}