import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-search',
  standalone: false,

  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  bookName = '';

  constructor(private bookService: BookService) {}

  consoleInput() {
    this.bookService.getBooks(this.bookName).subscribe((val) => {
      // console.log('searchcomponent: ', val); //
    });
    console.log(this.bookName);
  }
}
