import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HomeViewComponent } from '../../components/home-view/home-view.component';

@Component({
  selector: 'app-home',
  imports: [HomeViewComponent, FooterComponent, HomeViewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
