import { ArtworkService } from './../../services/artwork.service';
import { Component } from '@angular/core';
import { ArtworkCardComponent } from '../artwork-card/artwork-card.component';
import { OnInit } from '@angular/core';
import Artwork from '../../Model/artworks';

@Component({
  selector: 'app-artworks',
  imports: [ArtworkCardComponent],
  templateUrl: './artworks.component.html',
  styleUrl: './artworks.component.css',
})
export class ArtworksComponent implements OnInit {
  public artworks: Artwork[] = [];

  public constructor(private artworkService: ArtworkService) {}

  ngOnInit(): void {
    this.artworkService.getArtworks().subscribe({
      next: (data) => {
        this.artworks = data;
      },
    });
  }
}
