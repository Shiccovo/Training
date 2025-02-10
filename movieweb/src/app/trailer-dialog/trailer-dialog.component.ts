import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-trailer-dialog',
  templateUrl: './trailer-dialog.component.html',
  styleUrls: ['./trailer-dialog.component.scss'],
  standalone: true,
  imports: [
    YouTubePlayerModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class TrailerDialogComponent implements OnInit {
  videoWidth: number;
  videoHeight: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { videoKey: string },
    private dialogRef: MatDialogRef<TrailerDialogComponent>
  ) {

    const screenWidth = window.innerWidth * 0.8; // 屏幕宽度的80%
    this.videoWidth = Math.min(1600, screenWidth);
    this.videoHeight = this.videoWidth * 9 / 16;
  }

  ngOnInit() {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
    }
  }

  close() {
    this.dialogRef.close();
  }
}
                   