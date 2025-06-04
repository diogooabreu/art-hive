import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BudgetCardComponent } from '../budget-card/budget-card.component';

@Component({
  selector: 'app-artwork-card',
  imports: [NgOptimizedImage, BudgetCardComponent],
  templateUrl: './artwork-card.component.html',
  styleUrl: './artwork-card.component.css',
})
export class ArtworkCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
  @Input() id!: number;
  @Input() artist_avatar!: string;
  @Input() artist_name!: string;
  @Input() artist_friend_1!: string;
  @Input() artist_friend_2!: string;
  @Input() artist_friend_3!: string;

  randomFollowers() {
    return Math.floor(Math.random() * 99);
  }
}
