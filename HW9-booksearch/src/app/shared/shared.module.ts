import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscriptionManagePipe } from './discription-manage.pipe';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DiscriptionManagePipe],
  exports: [DiscriptionManagePipe, MatButtonModule],
  imports: [CommonModule],
})
export class SharedModule {}
