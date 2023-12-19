import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { CreateOrderService } from './service/create-order.service';

@Module({
  controllers: [OrderController],
  providers: [CreateOrderService],
})
export class OrderModule {}
