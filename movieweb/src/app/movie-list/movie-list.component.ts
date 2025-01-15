import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../models/movie.interface';

@Component({
  selector: 'app-movie-list',
  standalone: false,
  
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
  movies: Movie[] =[];
  constructor(private movieService: MovieService){}


  ngOnInit(){
    this.getMovieData();
  }

  getMovieData(page: number = 1) {
    this.movieService.getMovies(page).subscribe((data) => {
      this.movies = data.results;
    });
  }
  
}
