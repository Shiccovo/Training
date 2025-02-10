import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Material Modules
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DownloadComponent } from './pages/home/download/download.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MovieListModule } from './pages/movie-list/movie-list.module';
import { AuthStateService } from './services/auth-state.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DownloadComponent,
    LoginComponent,
  ],
  imports: [
    MovieListModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    YouTubePlayerModule
  ],
  providers: [AuthStateService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private authStateService: AuthStateService) {
  }
}
