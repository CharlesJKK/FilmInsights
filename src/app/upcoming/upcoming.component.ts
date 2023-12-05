import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilmListModule } from '../components/filmList/film-list.module';
import { HeaderModule } from '../components/header/header.module';

@Component({
  selector: 'app-upcoming',
  standalone: true,
  imports: [RouterModule, FilmListModule, HeaderModule],
  templateUrl: './upcoming.component.html',
  styleUrl: './upcoming.component.css'
})
export class UpcomingComponent {

}
