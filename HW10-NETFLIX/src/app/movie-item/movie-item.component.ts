import { Component,Input } from '@angular/core';
import { Movie } from '../app.component';

@Component({
  selector: 'app-movie-item',
  standalone: false,
  
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.scss'
})
export class MovieItemComponent {
  @Input() movie!: Movie;

}
