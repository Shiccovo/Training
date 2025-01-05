import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Item } from '../app.component';

@Component({
  selector: 'app-item',
  standalone: false,
  
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})


export class ItemComponent {
  @Input() item: Item | null = null;

}
