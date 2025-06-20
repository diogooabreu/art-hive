import { Component } from '@angular/core';
import Order from '../../Model/order';
import { OrdersService } from '../../services/orders-service.service';
import { NotificationsService } from '../../services/notifications-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-budget-card',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './budget-card.component.html',
  styleUrl: './budget-card.component.css',
})
export class BudgetCardComponent {
  email = '';
  subject = '';
  message = '';

  constructor(
    private orderSrevice: OrdersService,
    private notification: NotificationsService
  ) { }

  async handleSubmit() {
    try {
      const order = new Order(this.email, this.subject, this.message);
      await this.orderSrevice.createOrder(order);
      this.notification.succes("Pedido realizado com sucesso", "Sucesso");
      this.email = this.subject = this.message = '';
    } catch (err) {
      this.notification.error("Erro ao fazer o pedido", "Erro");
    }
  }
}
