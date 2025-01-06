import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { ExpectBook } from '../../interfaces/book.interface';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
})
export class WishListComponent implements OnInit {
  wishList: ExpectBook[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.wishListSubject$.subscribe((wishList) => {
      this.wishList = wishList.map((bookName) => ({ bookName }));
    });
  }

  removeFromWishList(book: ExpectBook) {
    this.wishList = this.wishList.filter((b) => b.bookName !== book.bookName);
    this.bookService.updateWishList(this.wishList);
  }
}