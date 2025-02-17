import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieItemComponent } from '../movie-item/movie-item.component';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from '../../shared/shared.module';
import { ScrollService } from '../../services/scroll.service';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [
      MovieDetailComponent,
      MovieItemComponent,
      MovieListComponent
    ],
    imports: [
        CommonModule,
        InfiniteScrollModule,
        MatProgressSpinnerModule,
        SharedModule,
        MatIconModule

      ],
    
    providers: [ScrollService],
    bootstrap: [MovieListComponent]
  })
  export class MovieListModule { }
  