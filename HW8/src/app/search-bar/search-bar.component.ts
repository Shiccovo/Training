import { Component } from '@angular/core';
import { ItunesApiService } from '../itunes-api.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: false,
  
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  search: string = '';
  showError: boolean = false;

  @Output() searchResults = new EventEmitter<any[]>();
  @Output() searchKeywordChange = new EventEmitter<string>();

  constructor(private itunesApiService: ItunesApiService) {}

  onSubmit(e: Event): void {
    e.preventDefault();
    const trimmedSearch = this.search.trim();
    if (trimmedSearch) {
      this.showError = false;
      this.searchKeywordChange.emit(trimmedSearch);
      this.itunesApiService.searchAlbums(trimmedSearch).subscribe(
        (response) => {
          this.searchResults.emit(response.results);
        },
        (error) => {
          console.error('Error fetching albums:', error);
        }
      );
    } else {
      this.showError = true;
    }
  }
}