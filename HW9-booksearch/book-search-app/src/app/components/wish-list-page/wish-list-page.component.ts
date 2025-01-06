import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { ExpectBook } from '../../interfaces/book.interface';

@Component({
  selector: 'app-wish-list-page',
  templateUrl: './wish-list-page.component.html',
  styleUrls: ['./wish-list-page.component.scss']
})
export class WishListPageComponent implements OnInit {
  wishList: ExpectBook[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.wishListSubject$.subscribe((wishList) => {
      this.wishList = wishList;
    });
  }

  removeFromWishList(bookName: string): void {
    this.wishList = this.wishList.filter(book => book.bookName !== bookName);
    this.bookService.updateWishList(this.wishList);
  }
}