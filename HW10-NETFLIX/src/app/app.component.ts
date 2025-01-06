import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HW10-NETFLIX';
}

export interface Movie {
  id: number;
  title: string
  release_date: string;
  poster_path:string;
  overview: string;
  vote_average: number;
  original_language: string;
  
}