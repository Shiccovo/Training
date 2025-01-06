import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HW8';
  albums: any[] = [];
  searchKeyword: string = '';
  resultCount: number = 0;

  onSearch(data:any[]){
    this.albums = data;
    this.resultCount = data.length;
    this.searchKeyword = this.searchKeyword;
  }

  onSearchKeywordChange(keyword: string) {
    this.searchKeyword = keyword;
  }
}

export interface Album {
  collectionId: number;
  collectionViewUrl: string;
  thumbnail: string;
  collectionName: string;
  artistName: string;
}