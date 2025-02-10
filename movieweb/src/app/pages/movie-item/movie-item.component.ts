import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../core/interfaces/movie.interface';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-movie-item',
  
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.scss',
  standalone:false
})
export class MovieItemComponent {
  @Input() movie!: Movie;
  @Output() movieSelected = new EventEmitter<Movie>();
  
  constructor(private router:Router){}
  onMovieSelected(){
    this.movieSelected.emit(this.movie);
    this.router.navigate(['/movie', this.movie.id]);
    
  }


}
