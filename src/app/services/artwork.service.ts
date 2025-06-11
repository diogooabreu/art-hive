import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Artwork from '../Model/artworks';

@Injectable({
  providedIn: 'root',
})
export class ArtworkService {
  private baseUrl = 'http://localhost:3000/artworks';
  constructor(private http: HttpClient) {}

  getArtworks() {
    return this.http.get<Artwork[]>(this.baseUrl);
  }
}
