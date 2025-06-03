import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ArtworkCardComponent } from '../artwork-card/artwork-card.component';

@Component({
  selector: 'app-home-view',
  imports: [HeaderComponent, ArtworkCardComponent],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.css',
})
export class HomeViewComponent {}
