import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchControl = new FormControl();

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(debounceTime(300))
      .subscribe((value) => {
        if (value) {
          this.bookService.getBooks(value);
        }
      });
  }
}