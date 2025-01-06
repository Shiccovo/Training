import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseUrl = 'https://api.themoviedb.org/3';
  private apikey = 'be5d8d12c1529d8f3dbdd07c4e881df8';


  constructor(private http: HttpClient) { 

  }


  getMovies(page: number = 1): Observable<any> {
    const url = `${this.baseUrl}/discover/movie?api_key=${this.apikey}&language=en-US&page=${page}`;
    return this.http.get(url);
  }

}
