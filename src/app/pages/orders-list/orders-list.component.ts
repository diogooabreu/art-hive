import { Component } from '@angular/core';
import { OrdersCardComponent } from '../../components/orders-card/orders-card.component';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-orders-list',
  imports: [
    OrdersCardComponent,
    HeaderComponent
  ],
  templateUrl: './orders-list.component.html',
  styleUrl: './orders-list.component.css'
})
export class OrdersListComponent {

}
