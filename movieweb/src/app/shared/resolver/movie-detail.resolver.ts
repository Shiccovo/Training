import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieService } from '../services/movie.service';
import { Movie } from '../../core/interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailResolver implements Resolve<Movie> {
  constructor(private movieService: MovieService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Movie> {
    const movieId = route.paramMap.get('id');
    return this.movieService.getMovieById(movieId!, true);
  }
}