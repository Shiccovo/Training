import { importProvidersFrom, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { MovieDetailResolver } from './shared/resolver/movie-detail.resolver';
import { MovieListResolver } from './shared/resolver/movie-list.resolver';


const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    data: { navBackground: 'transparent' }
  },
  { 
    path: 'register',
    loadChildren: () => import('./pages/register/container/register.module').then(m => m.RegisterModule)
  },
  { 
    path: 'login', 
    component: LoginComponent,
  },

  { 
    path: 'movie-list', 
    component: MovieListComponent,
    data: { navBackground: 'rgba(0, 0, 0, 0.9)' },
    resolve:{
      movie: MovieListResolver
    }
  },
  { 
    path: 'movie/:id', 
    component: MovieDetailComponent,
    data: { navBackground: 'rgba(0, 0, 0, 0.9)' },
    resolve:{
      movie: MovieDetailResolver
    }
  },
  { path: '**', redirectTo: 'register' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
