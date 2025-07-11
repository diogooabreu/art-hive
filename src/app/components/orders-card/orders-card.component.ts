import { Component, OnInit } from '@angular/core';
import Order from '../../Model/order';
import { OrdersService } from '../../services/orders-service.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'order-card',
  imports: [
    CommonModule
  ],
  templateUrl: './orders-card.component.html',
  styleUrl: './orders-card.component.css'
})
export class OrdersCardComponent implements OnInit {
  orders: Order[] = [];

  constructor(private ordersService: OrdersService) {}

  async ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user?.email) {
      try {
        this.orders = await this.ordersService.getOrdersByEmail(user.email);
      } catch (err) {
        console.error('Erro ao carregar pedidos:', err);
      }
    }
  }

  async deleteOrder(id: string) {
    try {
      await this.ordersService.deleteOrder(id);
      this.orders = this.orders.filter(order => order.id !== id);
    } catch (error) {
      console.error('Erro ao deletar pedido:', error);
    }
  }
}
