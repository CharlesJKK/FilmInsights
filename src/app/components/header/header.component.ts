import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  constructor(private router: Router) {}

  navigateToFilms() {
    this.router.navigate(['/films'])
  }

  navigateToSeries() {
    this.router.navigate(['/series'])
  }

  navigateToUpcoming() {
    this.router.navigate(['/upcoming'])
  }
}
