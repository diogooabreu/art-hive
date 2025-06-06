import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'not-found',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  constructor(private router: Router) { }

  imageUrl: string = 'https://e7.pngegg.com/pngimages/360/55/png-clipart-fate-grand-order-fate-stay-night-http-404-server-404-error-purple-violet.png'

  isAuthenticated() {
    const isLoggedIn = !!localStorage.getItem('user');
    if (isLoggedIn == true) {
      this.router.navigate(['home'])
    } else {
      this.router.navigate(['/auth/login'])
    }
  }
}
