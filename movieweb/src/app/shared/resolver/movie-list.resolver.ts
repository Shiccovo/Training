import { Injectable } from '@angular/core';
import { Movie } from '../../core/interfaces/movie.interface';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})


export class MovieListResolver implements Resolve<Movie[]> {
    constructor(private movieService: MovieService){
    }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Movie[]> {
        return this.movieService.getMovies(1);
    }

}