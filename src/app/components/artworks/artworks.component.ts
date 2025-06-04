import { Component } from '@angular/core';
import { ArtworkCardComponent } from '../artwork-card/artwork-card.component';
import artworks from '../../../../database/artworks';

@Component({
  selector: 'app-artworks',
  imports: [ArtworkCardComponent],
  templateUrl: './artworks.component.html',
  styleUrl: './artworks.component.css',
})
export class ArtworksComponent {
  artworks = artworks;
}
