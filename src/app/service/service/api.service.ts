import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private baseUrl = "https://api.themoviedb.org/3/"
  private apiKey = environment.apiKey

  get(endpoint: string) : Observable<any> {
    const url = `${this.baseUrl}${endpoint}?api_key=${this.apiKey}`
    return this.http.get(url)
  }

  post(endpoint: string, body: any): Observable<any> {
    const url = `${this.baseUrl}${endpoint}?api_key=${this.apiKey}`
    return this.http.post(url, body)
  }

}
