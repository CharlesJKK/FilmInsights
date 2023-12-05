import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilmListModule } from '../components/filmList/film-list.module';
import { HeaderModule } from '../components/header/header.module';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [RouterModule, FilmListModule, HeaderModule],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {

}
