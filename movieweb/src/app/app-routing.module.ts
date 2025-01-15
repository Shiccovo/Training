import { importProvidersFrom, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './register/container/register.component';
import { LoginComponent } from './pages/login/login.component';
import { MovieListComponent } from './movie-list/movie-list.component';


const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { 
    path: 'register',
    loadChildren: () => import('./register/container/register.module').then(m => m.RegisterModule)
  },
  { path: 'login', component: LoginComponent},
  { path: 'movie-list', component: MovieListComponent},
  { path: '**', redirectTo: 'register'} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
