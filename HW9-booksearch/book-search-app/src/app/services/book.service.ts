import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookRes, ExpectBook, ItemsEntity } from '../interfaces/book.interface';
import { BehaviorSubject, catchError, map, of, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  bookSubject$ = new BehaviorSubject<ExpectBook[]>([]);

  private wishlist$ = new BehaviorSubject<ExpectBook[]>([]);
  wishListSubject$ = this.wishlist$.asObservable();

  constructor(private http: HttpClient) {}

  getBooks(name: string) {
    return this.http.get<BookRes>(this.baseUrl + name).pipe(
      map((val: BookRes) => {
        return val.items?.map(({ volumeInfo: info }: ItemsEntity) => {
          return {
            bookName: info.title,
            bookPic: info.imageLinks?.thumbnail,
            publisher: info.publisher,
            publishDate: info.publishedDate,
            description: info.description,
          } as ExpectBook;
        }) || [];
      }),
      tap((val: ExpectBook[]) => {
        this.bookSubject$.next(val);
      }),
      catchError((err) => {
        return of([]);
      })
    );
  }

  addToWishList(book: ExpectBook) {
    this.wishlist$.next([...this.wishlist$.value, book]);
  }

  removeFromWishList(bookName: string) {
    const updatedWishlist = this.wishlist$.value.filter(book => book.bookName !== bookName);
    this.wishlist$.next(updatedWishlist);
  }
}