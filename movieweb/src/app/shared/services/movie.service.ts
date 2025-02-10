import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../../core/interfaces/movie.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseUrl = environment.tmdbApiUrl;
  private apikey = 'be5d8d12c1529d8f3dbdd07c4e881df8';


  constructor(private http: HttpClient) { 

  }


  getMovies(page: number = 1): Observable<any> {
    const url = `${this.baseUrl}/discover/movie?api_key=${this.apikey}&language=en-US&page=${page}`;
    return this.http.get(url);
  }

  getMovieById(id: string, includeCredits: boolean = false): Observable<Movie> {
    const url = `${this.baseUrl}/movie/${id}?api_key=${this.apikey}${includeCredits ? '&append_to_response=credits' : ''}`;
    return this.http.get<Movie>(url);
  }

  getMovieVideos(movieId: number): Observable<any> {
    const url = `${this.baseUrl}/movie/${movieId}/videos?api_key=${this.apikey}`;
    return this.http.get(url);
  }
}
