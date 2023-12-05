import { Component, Input } from '@angular/core';
import { ApiService } from '../../service/service/api.service';

@Component({
  selector: 'app-film-list',
  template: `
  <div class="film-container">
      <div *ngFor="let item of items" class="film-item" appHighlight [colorHighlight]="'orange'">
      <img [src]="getFullImageUrl(item.poster_path)" alt="{{ item.name }}" class="film-image">
        <div class="film-details">
          <h2 *ngIf="context === 'films' || context === 'upFilms'">{{ item.title }}</h2>
          <h2 *ngIf="context === 'series'">{{ item.name }}</h2>
          <p *ngIf="context !== 'upFilms'" class="rating">{{ formatRating(item.vote_average) }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .film-container {
      display: flex;
      flex-wrap: wrap;
    }

    .film-item {
      width: 20%; /* 20% width to show 5 films per row */
      padding: 10px;
      box-sizing: border-box;
    }

    .film-image {
      width: 100%;
      height: auto;
    }

    .film-details {
      text-align: center;
    }

    .rating {
      color: red;
    }
  `],
})
export class FilmListComponent {
    
    @Input() context: string = ''; 
    items: any[] = [];
    private baseUrlImage = "https://image.tmdb.org/t/p/w500"

    constructor(private apiService: ApiService) {}

    ngOnInit(): void {
        if(this.context === "films") {
            this.apiService.get("movie/popular").subscribe((data) => {
                this.items = data.results
            })
        }else if(this.context === "series") {
            this.apiService.get("tv/popular").subscribe((data) => {
                this.items = data.results
            })
        } else {
            this.apiService.get("movie/upcoming").subscribe((data) => {
              this.items = data.results
            })
        }
    }

    formatRating(rating: number): string {
        return rating.toFixed(1);
      }

    getFullImageUrl(imageUrl: string): string {
        return this.baseUrlImage + imageUrl;
    }
}