import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { ExpectBook } from '../../services/interfaces/book.interface';

@Component({
  selector: 'app-wish-list',
  standalone: false,

  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss',
})
export class WishListComponent {
  wishList: any = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.wishList$.subscribe((wishList) => {
      this.wishList = wishList;
    });
  }
  removeFromWishList(book: ExpectBook) {
    this.bookService.removeFromWishList(book);
  }
  
}
