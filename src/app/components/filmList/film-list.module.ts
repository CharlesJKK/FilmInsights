import { NgModule } from '@angular/core';
import { FilmListComponent } from './film-list.component';
import { CommonModule } from '@angular/common';
import { AppHighlightDirective } from '../../app-highlight.directive';

@NgModule({
  declarations: [FilmListComponent, AppHighlightDirective],
  imports: [CommonModule],
  exports: [FilmListComponent],
})
export class FilmListModule {}