import { IsArray, IsBoolean, IsString } from 'class-validator';

export class OrderDio {
  @IsString()
  user_id: string;

  @IsString()
  orderId: string;

  @IsArray()
  products: string[];

  @IsBoolean()
  payment: boolean;
}
