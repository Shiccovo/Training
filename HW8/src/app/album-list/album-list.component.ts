import { Component, Input } from '@angular/core';
import { Album } from '../app.component';

@Component({
  selector: 'app-album-list',
  standalone: false,
  
  templateUrl: './album-list.component.html',
  styleUrl: './album-list.component.css'
})
export class AlbumListComponent {
  @Input() albums: any[] = [];
}
