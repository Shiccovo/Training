import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollPosition: number = 0;

  saveScrollPosition(position: number) {
    this.scrollPosition = position;
  }

  getScrollPosition(): number {
    return this.scrollPosition;
  }

  resetScrollPosition() {
    this.scrollPosition = 0;
  }
}
