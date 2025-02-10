import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MovieService } from '../../shared/services/movie.service';
import { Movie } from '../../core/interfaces/movie.interface';
import { MovieItemComponent } from '../movie-item/movie-item.component';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SharedModule } from '../../shared/shared.module';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-movie-list',
  standalone: false,
  
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',

})

export class MovieListComponent implements OnInit, OnDestroy {
  currentPage = 1;
  showLogin = false;
  movies: Movie[] = [];
  loading = false;

  constructor(
    private movieService: MovieService,
    private scrollService: ScrollService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getMovieData();
    setTimeout(() => {
      window.scrollTo(0, this.scrollService.getScrollPosition());
    });
  }

  ngOnDestroy() {
    this.scrollService.saveScrollPosition(window.pageYOffset);
  }

  onMovieClick(movieId: number) {
    this.scrollService.saveScrollPosition(window.pageYOffset);
    this.router.navigate(['/movie', movieId]);
  }

  getMovieData() {
    if(this.loading) return;
    
    this.loading = true;
    
    this.movieService.getMovies(this.currentPage).subscribe({
        next: (data) => {
          this.movies = [...this.movies, ...data.results];
          this.currentPage++;
          this.loading = false;
        },

        error:(error)=>{
          console.error('Error fetching movies:',error);
          this.loading = false;
        }}
    );
  }
  
  onScroll() {
    this.getMovieData();
  }
}
