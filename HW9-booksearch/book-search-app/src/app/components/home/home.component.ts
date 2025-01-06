import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bookName: string = '';
  searchSubject: Subject<string> = new Subject();

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.searchSubject.pipe(debounceTime(300)).subscribe((name) => {
      this.bookService.getBooks(name);
    });
  }

  onSearchChange(searchValue: string): void {
    this.bookName = searchValue;
    this.searchSubject.next(this.bookName);
  }
}