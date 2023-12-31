import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../service/service/api.service';
import { FilmListModule } from '../components/filmList/film-list.module';
import { HeaderModule } from '../components/header/header.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, FilmListModule, HeaderModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}
