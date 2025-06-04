import { Component } from '@angular/core';
import { ArtworksComponent } from '../../components/artworks/artworks.component';

@Component({
  selector: 'app-home',
  imports: [ArtworksComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
