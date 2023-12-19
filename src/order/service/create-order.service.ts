import { Injectable } from '@nestjs/common';
import { OrderDio } from '../dto/order.dto';

@Injectable()
export class CreateOrderService {
  order = [];

  async createOrder(orderInfo: OrderDio): Promise<any> {
    this.order.push(orderInfo);

    return this.order;
  }
}
