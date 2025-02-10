import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../shared/services/movie.service';
import { Movie } from '../../core/interfaces/movie.interface';
import { LimitArrayPipe } from '../../shared/pipes/limit-array.pipe';
import { TrailerDialogComponent } from '../../trailer-dialog/trailer-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-detail',
  standalone: false,
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie!: Movie;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.movie = data['movie'];
      console.log('Movie data from resolver:', this.movie);
    })
  }

  playNow() {
    this.movieService.getMovieVideos(this.movie.id).subscribe((res: any) => {
      const trailer = res.results.find((vid: any) =>
        vid.type === 'Trailer' && vid.site === 'YouTube'
      );
      if (trailer) {
        const videoKey = trailer.key;
        const screenWidth = window.innerWidth * 0.8;
        const width = Math.min(1600, screenWidth);
        const height = width * 9 / 16;

        this.dialog.open(TrailerDialogComponent, {
          data: { videoKey },
          width: `${width}px`,
          height: `${height}px`,
          maxWidth: '100vw',
          maxHeight: '100vh',
          panelClass: 'trailer-dialog'
        });
      } else {
        console.warn('No trailer found!');
      }
    });
  }
}