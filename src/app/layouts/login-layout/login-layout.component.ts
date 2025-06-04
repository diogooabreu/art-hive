import { Component} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'login-layout',
  imports: [
    NgOptimizedImage,
    RouterOutlet
  ],
  templateUrl: './login-layout.component.html',
  styleUrl: './login-layout.component.css'
})
export class LoginLayoutComponent {

  imageUrl: string = "https://img.freepik.com/fotos-gratis/personagem-de-anime-usando-oculos-de-realidade-virtual-no-metaverso_23-2151568837.jpg?semt=ais_hybrid&w=740"

}
