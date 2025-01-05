import { Component, Input , Output , EventEmitter } from '@angular/core';
import { Item } from '../app.component';


@Component({
  selector: 'app-main',
  standalone: false,
  
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  @Input() items!: Item[];
  @Input() selectedItemId!: number | null;

  @Output() selectedItemIdChange = new EventEmitter<number | null>();

  onClickItem(id:number){
    this.selectedItemId = id;
    this.selectedItemIdChange.emit(id);
    console.log(id);
  }
}
