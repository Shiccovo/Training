import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LimitArrayPipe } from './pipes/limit-array.pipe';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LimitArrayPipe
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    RouterModule,
    LimitArrayPipe
  ]
})

export class SharedModule { } 