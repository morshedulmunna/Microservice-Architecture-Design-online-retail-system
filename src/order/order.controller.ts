import { Body, Controller, Post } from '@nestjs/common';
import { OrderDio } from './dto/order.dto';
import { CreateOrderService } from './service/create-order.service';

@Controller('order')
export class OrderController {
  constructor(private orderService: CreateOrderService) {}

  @Post('create')
  async createOrder(@Body() order: OrderDio): Promise<any> {
    try {
      return this.orderService.createOrder(order);
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
