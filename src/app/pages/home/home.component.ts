import { Component } from '@angular/core';
import { ArtworksComponent } from '../../components/artworks/artworks.component';
import { HeadingComponent } from '../../components/heading/heading.component';

@Component({
  selector: 'app-home',
  imports: [ArtworksComponent, HeadingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
