import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Order from '../Model/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private baseUrl = 'http://localhost:3000/orders';

  constructor(private http: HttpClient) {}

  createOrder(order: Order): Promise<Order> {
    return this.http.post<Order>(this.baseUrl, order)
      .toPromise()
      .then(res => res ?? this.getEmptyOrder()); // garante Order
  }

  getOrdersByEmail(email: string): Promise<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}?email=${email}`)
      .toPromise()
      .then(res => res ?? []); // garante array
  }

  getAllOrders(): Promise<Order[]> {
    return this.http.get<Order[]>(this.baseUrl)
      .toPromise()
      .then(res => res ?? []); // garante array
  }

  private getEmptyOrder(): Order {
    return new Order('', '', '');
  }
}
